import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ExperienceList from './components/ExperienceList'
import DownloadResumeBtn from '@/components/DownloadResumeBtn'
import { Metadata } from 'next'
import {
	heading,
	paragraph,
	professional,
	education,
	certifications,
} from './text/resume'

export const metadata: Metadata = {
	title: 'Experience',
}

export default function Experience(): JSX.Element {
	return (
		<>
			<main className='md:mt-42 mt-36'>
				<Container>
					<section>
						<HeadingContainer
							headingText={heading}
							paragraphText={paragraph}
						/>
						<div className='flex max-w-2xl items-center'>
							<div className='lg:pl-16 xl:pl-24'>
								<DownloadResumeBtn />
							</div>
						</div>
					</section>
				</Container>

				<Container>
					<div className='space-y-10 lg:pl-16 xl:pl-24'>
						<ExperienceList
							type={'Professional'}
							experiences={professional}
						/>
						<ExperienceList
							type={'Education'}
							experiences={education}
						/>
						<ExperienceList
							type={'Certifications'}
							experiences={certifications}
						/>
						<DownloadResumeBtn />
					</div>
				</Container>
			</main>
		</>
	)
}
