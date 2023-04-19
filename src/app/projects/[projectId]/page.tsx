import getProjectsList from '@/lib/getProjectsList'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import getProjectData from '@/lib/getProjectsData'
import LinkIcon from '@/app/icons/LinkIcon'

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

	const projectData = await getData(projectId)

	const content = (
		<main className=' mx-auto mt-20 max-w-xl px-6 md:mt-14 md:max-w-7xl'>
			<Container>
				<header className='mb-10 max-w-2xl'>
					<HeadingContainer
						headingText={projectData.name}
						paragraphText={projectData.summary}
					/>
				</header>
				<article className=' article prose prose-xl dark:prose-invert'></article>
			</Container>
		</main>
	)

	return content
}
