import getProjectData from '@/lib/getProjectsData'
import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '../icons/LinkIcon'
import GitHubIcon from '../icons/GitHubIcon'

interface Props {
	projectId: string
}

export default async function InformationCard({ projectId }: Props) {
	const { name, image, link, linkText } = await getProjectData(projectId)

	return (
		<div className='mt-20'>
			<section className='flex flex-row'>
				<div>
					<Image
						alt={name}
						src={image}
						height={60}
						width={60}
						className='rounded-lg'
					/>
				</div>

				<div className='ml-6 flex flex-col'>
					<div className='flex gap-x-2'>
						<LinkIcon />
						<Link href={link}>{`${linkText}`}</Link>
					</div>
					<div className='mt-4 flex gap-x-2'>
						<GitHubIcon />
						<Link href={link}>Source Code</Link>
					</div>
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
}
