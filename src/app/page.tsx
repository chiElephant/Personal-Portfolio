import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ArticlesList from '@/app/components/ArticlesList'
import EmailListForm from '@/components/EmailListForm'
import ImageGrid from '@/components/ImageGrid'
import List from './components/List'

export default async function Home(): Promise<JSX.Element> {
	const content = (
		<main className='mt-24'>
			<Container>
				<section>
					{/* @ts-expect-error Async Server Component Workaround */}
					<HeadingContainer
						headingText={
							'Full Stack engineer, sommelier, and Ironman finisher.'
						}
						paragraphText={`Hello there! I'm Anthony, a software engineer and entrepreneur who calls beautiful Boulder, Colorado home by way of Chicago. I'm a natural problem-solver, and welcome the opportunity to apply my varied skill sets to tackle new challenges, break down boundaries, and discover innovative solutions. My mission is to help people realize their dreams, overcome obstacles, and achieve what they once thought impossible. If you're in search of a partner who is passionate, innovative, and devoted to excellence, I'd love to connect with you and help bring ideas to life!`}
						dataType={null}
						dataId={null}
					/>
				</section>
			</Container>

			<ImageGrid />

			<Container>
				<section className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
					<div className='flex flex-col gap-16'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<ArticlesList
							page={'home'}
							length={3}
						/>
					</div>
					<div className='space-y-10 lg:pl-16 xl:pl-24'>
						<EmailListForm />
						{/* @ts-expect-error Async Server Component Workaround */}
						<List listType={'professional'} />
					</div>
				</section>
			</Container>
		</main>
	)
	return content
}
