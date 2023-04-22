import getProjectsList from '@/lib/getProjectsList'
import { notFound } from 'next/navigation'
import getProjectData from '@/lib/getProjectsData'
import HeadingContainer from '@/app/components/HeadingContainer'
import HeroImage from '@/app/components/HeroImage'
import Container from '@/app/components/Container'
import InformationCard from '@/app/components/InformationCard'
import StackList from '@/app/components/StackList'
import ProjectVideo from '@/app/components/ProjectVideo'

type Params = {
	params: {
		projectId: string
	}
}

async function getList() {
	return await getProjectsList()
}

async function getData(projectId: string) {
	return await getProjectData(projectId)
}

async function projectExists(projectId: string) {
	const projectsList = await getList()
	return projectsList.find((project) => project === `${projectId}`)
}

export async function generateStaticParams() {
	const projectsList = await getList()

	if (projectsList) {
		return projectsList.map((projectId: string) => ({
			projectId,
		}))
	}
	return notFound()
}

export async function generateMetadata({ params }: Params) {
	const { projectId } = params
	const exists = await projectExists(projectId)

	if (!exists) {
		return {
			title: 'Project Not Found',
		}
	}

	const projectData = await getData(projectId)

	return {
		title: projectData.name,
	}
}

export default async function Article({ params }: Params) {
	const { projectId } = params
	const exists = await projectExists(projectId)

	if (!exists) {
		return notFound()
	}

	const { name, summary, image, stack } = await getData(projectId)

	const content = (
		<main className='mt-42 mt-36'>
			<Container>
				<div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<HeroImage image={image} />

					<section className='lg:order-first lg:row-span-2'>
						<HeadingContainer
							headingText={name}
							paragraphText={summary}
						/>

						{/* @ts-expect-error Async Server Component Workaround */}
						<InformationCard projectId={projectId} />

						<ProjectVideo
							projectName={name}
							projectImage={image}
						/>
					</section>

					<section className='lg:pl-20'>
						<StackList stackList={stack} />
					</section>
				</div>
			</Container>
		</main>
	)

	return content
}
