import ProjectCard from '@/components/ProjectCard'
import getList from '@/lib/getList'

export default async function ProjectGrid(): Promise<JSX.Element> {
	const list = await getList('projects')

	if (list === null) {
		return <></>
	}

	const content = (
		<div className='mt-16 sm:mt-20'>
			<ul className='grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
				{list.map((projectId: string) => (
					/* @ts-expect-error Server Component */
					<ProjectCard
						key={projectId}
						projectId={projectId}
					/>
				))}
			</ul>
		</div>
	)

	return content
}
