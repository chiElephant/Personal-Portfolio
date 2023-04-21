import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import DownloadResumeBtn from '@/components/DownloadResumeBtn'
import { Metadata } from 'next'
import EducationList from '@/components/EducationList'
import CertificationsList from '@/components/CertificationsList'
import ProfessionalGrid from '@/components/ProfessionalGrid'

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
							headingText={`Engineering and beyond. Experience, education and certifications.`}
							paragraphText={`My professional experience in hospitality management, business development and software engineering, my education, and knowledge I've gained along the way.`}
						/>
						<div className='flex max-w-2xl items-center'>
							<div className='pl-0'>
								<DownloadResumeBtn />
							</div>
						</div>
					</section>

					<section className='mt-16'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<ProfessionalGrid />
						{/* @ts-expect-error Async Server Component Workaround */}
						<EducationList />
						{/* @ts-expect-error Async Server Component Workaround */}
						<CertificationsList />
						<DownloadResumeBtn />
					</section>
				</Container>
			</main>
		</>
	)
}
