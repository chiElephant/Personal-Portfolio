import { notFound } from 'next/navigation'
import HeadingContainer from '@/app/components/HeadingContainer'
import HeroImage from '@/app/components/HeroImage'
import Container from '@/app/components/Container'
import InformationCard from '@/app/components/InformationCard'
import ProjectVideo from '@/app/components/ProjectVideo'
import List from '@/app/components/List'
import getData from '@/lib/getData'
import getList from '@/lib/getList'

type Params = {
	params: {
		projectId: string
	}
}

export async function generateStaticParams() {
	const projectsList = await getList('projects')

	if (projectsList === null) {
		return notFound()
	}

	return projectsList.map((projectId: string) => ({ projectId }))
}

export async function generateMetadata({ params }: Params) {
	const { projectId } = params
	const projectData = await getData('projects', projectId)

	if (projectData === null) {
		return {
			title: 'Project Not Found',
		}
	}

	return {
		title: projectData.name,
	}
}

export default async function Article({ params }: Params) {
	const { projectId } = params
	const project = await getData('projects', projectId)

	if (project === null) {
		return notFound()
	}

	const content = (
		<main className='mt-42 mt-36 text-zinc-800 dark:text-zinc-100'>
			<Container>
				<div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<HeroImage image={project.image} />
					<section className='lg:order-first lg:row-span-2'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<HeadingContainer
							dataType={'projects'}
							dataId={projectId}
							headingText={null}
							paragraphText={null}
						/>

						{/* @ts-expect-error Async Server Component Workaround */}
						<InformationCard
							dataType={'projects'}
							dataId={projectId}
						/>

						<ProjectVideo project={project} />
					</section>

					<section className='lg:pl-20'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<List listType={`stack:${projectId}`} />
					</section>
				</div>
			</Container>
		</main>
	)

	return content
}
