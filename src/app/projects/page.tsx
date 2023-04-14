import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ProjectList from './components/ProjectList'
import { heading, paragraph, projects } from './text/projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Projects',
}

export default function Projects(): JSX.Element {
	return (
		<main className='md:mt-42 mt-36'>
			<Container>
				<HeadingContainer
					headingText={heading}
					paragraphText={paragraph}
				/>
				<ProjectList projects={projects} />
			</Container>
		</main>
	)
}
