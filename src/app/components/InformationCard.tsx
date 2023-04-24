import getProjectData from '@/lib/getProjectsData'
import getExperienceData from '@/lib/getExperienceData'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import LinkIcon from '../icons/LinkIcon'
import Link from 'next/link'
import GitHubIcon from '../icons/GitHubIcon'
import ProfessionalList from './ProfessionalList'

interface Props {
	dataType: string
	dataId: string
}

export async function getData(dataType: string, dataId: string) {
	if (dataType === 'project') {
		return await getProjectData(dataId)
	} else {
		return await getExperienceData(dataType, dataId)
	}
}

export default async function InformationCard({ dataType, dataId }: Props) {
	const data = await getData(dataType, dataId)

	if (Boolean(!data)) {
		return notFound()
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
					{dataType === 'project' ? (
						<div className='mt-4 flex gap-x-2'>
							<GitHubIcon />
							<Link href={data.githubLink}>Source Code</Link>
						</div>
					) : (
						''
					)}
				</div>
			</section>

			<section className='mt-20'>
				<ul className='ml-4 list-disc'>
					<li className='mt-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur ex debitis reiciendis fuga temporibus dolores
						recusandae, nihil itaque rerum officia.
					</li>
					<li className='mt-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur ex debitis reiciendis fuga temporibus dolores
						recusandae, nihil itaque rerum officia.
					</li>
					<li className='mt-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur ex debitis reiciendis fuga temporibus dolores
						recusandae, nihil itaque rerum officia.
					</li>
					<li className='mt-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur ex debitis reiciendis fuga temporibus dolores
						recusandae, nihil itaque rerum officia.
					</li>
					<li className='mt-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur ex debitis reiciendis fuga temporibus dolores
						recusandae, nihil itaque rerum officia.
					</li>
				</ul>
			</section>
		</div>
	)

	return content
}
