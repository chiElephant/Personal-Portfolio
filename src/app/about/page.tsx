import Container from '@/components/Container'
import SocialList from '@/components/SocialList'
import HeroImage from '@/components/HeroImage'
import Heading from '@/components/HeadingContainer'
import { content } from '@/app/about/text/about'
import ParagraphContainer from '@/app/about/components/ParagraphContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About',
}

export default function About(): JSX.Element {
	return (
		<main className='md:mt-42 mt-36'>
			<Container>
				<div className='lg:grid-rows-[auto_1fr]. grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12'>
					<HeroImage image='/flatirons-bw.webp' />

					<section className='lg:order-first lg:row-span-2'>
						<Heading
							headingText={content.heading}
							paragraphText={content.paragraph}
						/>

						<ParagraphContainer text={content.text} />
					</section>

					<div className='lg:pl-20'>
						<ul>
							<SocialList page={'about'} />
						</ul>
					</div>
				</div>
			</Container>
		</main>
	)
}
