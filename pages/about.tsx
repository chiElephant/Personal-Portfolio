import Meta from '@/components/Meta'
import ContainerTest from '@/components/Container'
import AboutContent from '@/components/about/AboutContent'
import AboutCTA from '@/components/about/AboutCTA'

export default function About() {
	return (
		<>
			<Meta page='About' />
			<main>
				<ContainerTest>
					<div className='lg:grid-rows-[auto_1fr]. grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12'>
						<AboutContent />
						<AboutCTA />
					</div>
				</ContainerTest>
			</main>
		</>
	)
}
