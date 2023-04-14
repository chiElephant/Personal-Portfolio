import ProjectItem from './ProjectItem'

interface Props {
	projects: any
}

export default function ProjectGrid({ projects }: Props): JSX.Element {
	return (
		<div className='mt-16 sm:mt-20'>
			<ul className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project: any, i: string) => (
					<ProjectItem
						key={i}
						project={project}
					/>
				))}
			</ul>
		</div>
	)
}
