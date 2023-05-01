import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import DownloadResumeBtn from '@/components/DownloadResumeBtn'
import { Metadata } from 'next'
import ProfessionalGrid from '@/components/ProfessionalGrid'
import List from '../components/List'
import SocilaLList from '../components/SocialList'
import HeroImage from '../components/HeroImage'
import SubImage from '../components/SubImage'

export const metadata: Metadata = {
	title: 'Experience',
}

export default function Experience(): JSX.Element {
	return (
		<>
			<main className='mt-12 md:mt-28'>
				<Container>
					<div className='grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-16'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<HeroImage
							dataType={null}
							dataId={null}
							style={`-rotate-3 rounded-2xl drop-shadow-2xl dark:drop-shadow-[0_10px_8px_rgba(0,0,0,1)]`}
							image={'/experiences2.png'}
						/>

						<section className='flex flex-col justify-center lg:row-span-2'>
							{/* @ts-expect-error Async Server Component Workaround */}
							<HeadingContainer
								headingText={`Engineering and beyond. Experience, education and certifications.`}
								paragraphText={`My professional experience in hospitality management, business development and software engineering, my education, and knowledge I've gained along the way.`}
								dataType={null}
								dataId={null}
							/>
							<ul className='flex gap-6'>
								<SocilaLList style={'columns'} />
							</ul>
							<div className='flex max-w-2xl items-center'>
								<div className='pl-0'>
									<DownloadResumeBtn />
								</div>
							</div>
						</section>
					</div>

					<section className='mt-16'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<ProfessionalGrid />
						<DownloadResumeBtn />

						<div className='mt-24 grid grid-cols-1 items-center justify-center gap-x-16 gap-y-16 md:grid-cols-2'>
							<div className='flex justify-center'>
								<SubImage image={'/education2.png'} />
							</div>

							{/* @ts-expect-error Async Server Component Workaround */}
							<List listType={'education'} />
						</div>

						<div className='mt-24 grid grid-cols-1 items-center justify-center gap-x-16 gap-y-16 md:grid-cols-2'>
							<div className='flex justify-center'>
								<SubImage image={'/certifications2.png'} />
							</div>
							<div className='md:order-first'>
								{/* @ts-expect-error Async Server Component Workaround */}
								<List listType={'certifications'} />
							</div>
						</div>
					</section>
				</Container>
			</main>
		</>
	)
}
