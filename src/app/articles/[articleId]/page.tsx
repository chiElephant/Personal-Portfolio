import getArticlesList from '@/lib/getArticlesList'
import getArticleData from '@/lib/getArticleData'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeHighlight from 'rehype-highlight/lib'
import Link from 'next/link'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'

type Params = {
	params: {
		articleId: string
	}
}

async function getList(listLength: number) {
	return await getArticlesList(listLength)
}

async function getData(articleId: string) {
	return await getArticleData(articleId)
}

async function articleExists(articleId: string) {
	const articlesList = await getList(-1)
	return articlesList.find((article) => article === `${articleId}`)
}

export async function generateStaticParams() {
	const articlesList = await getList(-1)

	if (articlesList) {
		return articlesList.map((articleId: string) => ({
			articleId,
		}))
	}

	return notFound()
}

export async function generateMetadata({ params }: Params) {
	const { articleId } = params
	const articleData = await getData(articleId)

	if (!articleData) {
		return {
			title: 'Article Not Found',
		}
	}
	return {
		title: articleData.title,
	}
}

export default async function Article({ params }: Params) {
	const { articleId } = params
	const exists = await articleExists(articleId)

	if (!exists) {
		return notFound()
	}

	const articleData = await getData(articleId)

	const mdxOptions = {
		mdxOptions: {
			rehypePlugins: [rehypeHighlight],
		},
	}

	const content = (
		<main className=' mx-auto mt-20 max-w-xl px-6 md:mt-14 md:max-w-7xl'>
			<Container>
				<header className='mb-10 max-w-2xl'>
					<HeadingContainer
						headingText={articleData.title}
						paragraphText={articleData.date}
					/>
				</header>
				<article className=' article prose prose-xl dark:prose-invert'>
					{/* @ts-expect-error Async Server Component Workaround */}
					<MDXRemote
						source={articleData.content}
						options={mdxOptions}
					/>
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

	return content
}
