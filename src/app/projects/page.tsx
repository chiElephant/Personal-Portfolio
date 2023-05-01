import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ProjectGrid from '@/components/ProjectGrid'
import { Metadata } from 'next'
import SocilaLList from '../components/SocialList'
import HeroImage from '../components/HeroImage'

export const metadata: Metadata = {
	title: 'Projects',
}

export default function Projects(): JSX.Element {
	return (
		<main className='mt-12 md:mt-28'>
			<Container>
				<div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					{/* @ts-expect-error Server Component */}
					<HeroImage
						dataType={null}
						dataId={null}
						style={`rotate-3 rounded-2xl drop-shadow-2xl dark:drop-shadow-[0_10px_8px_rgba(0,0,0,1)]`}
						image={'/projects2.png'}
					/>

					<section className='flex flex-col justify-center lg:order-first lg:row-span-2'>
						{/* @ts-expect-error Server Component */}
						<HeadingContainer
							headingText={`Things I've made to display my skills and proficiencies.`}
							paragraphText={`Here are some of the recent things I've made that I'm proud of. Most of my projects are public on GitHub, so if you see something that piques your interest, checkout out the code and feel free to get in touch with any questions or ideas for how it can be improved.`}
							dataType={null}
							dataId={null}
						/>
						<ul className='flex gap-6'>
							<SocilaLList style={'columns'} />
						</ul>
					</section>
				</div>

				{/* @ts-expect-error Server Component */}
				<ProjectGrid />
			</Container>
		</main>
	)
}
