import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ProjectGrid from './components/ProjectGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Projects',
}

export default function Projects(): JSX.Element {
	return (
		<main className='md:mt-42 mt-36'>
			<Container>
				<HeadingContainer
					headingText={`Things I've made to display my skills and proficiencies.`}
					paragraphText={`Here are some of the recent things I've made that I'm proud of. Most of my projects are public on GitHub, so if you see something that piques your interest, checkout out the code and feel free to get in touch with any questions or ideas for how it can be improved.`}
				/>
				{/* @ts-expect-error Server Component */}
				<ProjectGrid />
			</Container>
		</main>
	)
}
