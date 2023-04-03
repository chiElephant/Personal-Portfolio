import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { heading, paragraph } from '../text/articles'
import Meta from '@/components/Meta'
import PostsList from '@/components/PostsList'

export default function Articles(): JSX.Element {
	return (
		<>
			<Meta page={'Articles'}/>
			<main>

				<Container>
					<header className='max-w-2xl'>
						<Heading
							headingText={heading}
							paragraphText={paragraph}
						/>
					</header>

					{/* Post board container */}
					<section className='mt-16 sm:mt-20'>
						<div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
							<div className='flex max-w-3xl flex-col space-y-16'>
								<PostsList page={'articles'}/>
							</div>
						</div>
					</section>
				</Container>
			</main>
		</>
	)
}
