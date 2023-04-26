import type { Metadata } from 'next'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ArticlesList from '@/components/ArticlesList'
import EmailListForm from '@/components/EmailListForm'

export const metadata: Metadata = {
	title: 'Articles',
}

export default async function Articles(): Promise<JSX.Element> {
	const content: JSX.Element = (
		<main className='md:mt-42 mt-36'>
			<Container>
				<header className='max-w-2xl'>
					{/* @ts-expect-error Async Server Component Workaround */}
					<HeadingContainer
						headingText={
							'Writing on software development, web3, and topics I find interesting'
						}
						paragraphText={`My thoughts, rantings, and advice on technology, leadership, and industry. Tools I use or am exploring and tips of the trade I've picked up along the way.`}
						dataType={null}
						dataId={null}
					/>
				</header>
			</Container>

			<Container>
				<section className='mx-auto mt-16 grid max-w-xl grid-cols-1 gap-y-20 sm:mt-20 lg:max-w-none lg:grid-cols-2'>
					<div className='mb-32 flex max-w-3xl flex-col space-y-16 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<ArticlesList
							page={'articles'}
							length={-1}
						/>
					</div>
					<div className='space-y-10 lg:pl-16 xl:pl-24'>
						<EmailListForm />
					</div>
				</section>
			</Container>
		</main>
	)

	return content
}
