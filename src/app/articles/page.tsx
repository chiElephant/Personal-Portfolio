import type { Metadata } from 'next'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ArticlesList from '@/app/articles/components/ArticlesList'
import getArticlesList from '@/lib/getArticlesList'

export const metadata: Metadata = {
	title: 'Articles',
}

export default async function Articles(): Promise<JSX.Element> {
	const articlesList = await getArticlesList(-1)

	const content: JSX.Element = (
		<main className='md:mt-42 mt-36'>
			<Container>
				<header className='max-w-2xl'>
					<HeadingContainer
						headingText={'Writing on software development, web3, and topics I find interesting'}
						paragraphText={`My thoughts, rantings, and advice on technology, leadership, and industry. Tools I use or am exploring and tips of the trade I've picked up along the way.`}
					/>
				</header>

				{/* Post board container */}
				<section className='mt-16 sm:mt-20'>
					<div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
						<div className='flex max-w-3xl flex-col space-y-16'>
							<ArticlesList
								page={'articles'}
								articlesList={articlesList}
							/>
						</div>
					</div>
				</section>
			</Container>
		</main>
	)

	return content
}
