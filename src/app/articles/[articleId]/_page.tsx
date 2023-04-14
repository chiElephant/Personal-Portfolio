import getArticlesList from '@/lib/getArticlesList'
import getArticleData from '@/lib/getArticleData'
import getContentHTML from '@/lib/getContentHTML'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import logger from '@/util/logger'
import { Logger } from 'winston'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

interface Params{
	params: { articleId: string }
}

export async function generateStaticParams(): Promise<{ articleId: string; }[]> {
	const listLength = -1
	const articlesList: ArticlesList = await getArticlesList(listLength)

	return articlesList.map((article) => ({
		articleId: article,
	}))
}

export async function generateMetadata({params}: Params) {
	const { articleId } = params

	const articleData: ArticleData = await getArticleData(articleId)

	if (!articleData) {
		return {
			title: 'Post Not Found',
		}
	}
	return {
		title: articleData.title,
	}
}

export default async function Article({ params }: Params): Promise<JSX.Element> {
	const log: Logger = logger()
	const { articleId } = params

	const articleData = await getArticleData(articleId)

	if (articleData === undefined) {
		return notFound()
	}

	const { title, date, content } = articleData
	const contentHTML = await getContentHTML(content)

	if (contentHTML === undefined) {
		return notFound()
	}

	return (
		<main className=' mx-auto mt-16 md:max-w-7xl max-w-2xl px-6'>
			<Container>
				<header className='mb-10 max-w-2xl'>
					<HeadingContainer
						headingText={title}
						paragraphText={date}
					/>
				</header>
				<article className='prose prose-xl prose-p:text-zinc dark:prose-invert'>
	 				<ReactMarkdown
						rehypePlugins={[rehypeHighlight]}
					>
						{content}
					</ReactMarkdown>

					<p>
						<Link
							href='/articles'
							className='no-underline'
						>
							← Back to Articles
						</Link>
					</p>
				</article>
			</Container>
		</main>
	)
}
