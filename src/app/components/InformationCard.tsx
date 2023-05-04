import Image from 'next/image'
import LinkIcon from '../icons/LinkIcon'
import Link from 'next/link'
import GitHubIcon from '../icons/GitHubIcon'
import getData from '@/lib/getData'
import getPoints from '@/lib/getPoints'

interface Props {
	dataType: string
	dataId: string
}

export default async function InformationCard({ dataType, dataId }: Props) {
	const data = await getData(dataType, dataId)
	const points = await getPoints(dataId)

	if (data === null || points === null) {
		return <></>
	}

	const content = (
		<div className='mt-20'>
			<section className='ml-8 flex flex-row items-center'>
				<div>
					<Image
						alt={data.name || data.company || data.school || data.issuingOrg}
						src={data.icon}
						height={60}
						width={60}
						className='rounded-lg'
					/>
				</div>

				<div className='ml-6 flex flex-col'>
					<div className='flex gap-x-2'>
						<LinkIcon />
						<Link href={data.externalLink || ''}>
							{`${data.linkText}` || ''}
						</Link>
					</div>

					{/* If the data is for a project, include the GitHub link */}
					{dataType === 'projects' ? (
						<div className='mt-4 flex gap-x-2'>
							<GitHubIcon />
							<Link href={data.githubLink}>repository</Link>
						</div>
					) : (
						''
					)}

					{/* If the data is for a certification, include the credential link */}
					{dataType === 'certifications' ? (
						<div className='mt-4 flex gap-x-2'>
							<LinkIcon />
							<Link href={data.credentialURL}>Certificate</Link>
						</div>
					) : (
						''
					)}
				</div>
			</section>

			<section className='mt-20'>
				<ul className='ml-4 list-disc'>
					{points.map((point) => (
						<li
							key={point}
							className='mt-10'
						>
							{point}
						</li>
					))}
				</ul>
			</section>
		</div>
	)

	return content
}
