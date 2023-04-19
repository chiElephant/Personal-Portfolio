import getProjectsList from '@/lib/getProjectsList'
import ProjectCard from './ProjectCard'

interface Props {
	projects: any
}

export async function getList() {
	return await getProjectsList()
}

export default async function ProjectGrid({
	projects,
}: Props): Promise<JSX.Element> {
	const projectsList: string[] = await getList()

	const content = (
		<div className='mt-16 sm:mt-20'>
			<ul className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
				{projectsList.map((projectName: string) => (
					/* @ts-expect-error Server Component */
					<ProjectCard
						key={projectName}
						projectName={projectName}
					/>
				))}
			</ul>
		</div>
	)

	return content
}
