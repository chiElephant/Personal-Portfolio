import Meta from '@/components/Meta'
import AboutContent from '@/components/about/AboutContent'
import AboutCTA from '@/components/about/AboutCTA'

export default function Home() {
	return (
		<>
			<Meta page='About' />
			<main>
				<div className='mt-32 sm:mt-48 sm:px-8'>
					<div className='mx-auto max-w-7xl lg:px-8'>
						<div className='relative px-4 sm:px-8 lg:px-12'>
							<div className='mx-auto max-w-2xl lg:max-w-5xl'>
								<div className='lg:grid-rows-[auto_1fr]. grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12'>
									<AboutContent />
									<AboutCTA />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
