import getArticlesList from '@/lib/getArticlesList'
import getArticleData from '@/lib/getArticleData'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeHighlight from 'rehype-highlight/lib'
import Link from 'next/link'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'

export async function generateStaticParams() {
	const articlesList = await getArticlesList(-1)

	if (articlesList) {
		return articlesList.map((article: string) => ({
			articleId: article,
		}))
	}
}

export async function generateMetadata({
	params,
}: {
	params: { articleId: string }
}) {
	const { articleId } = params
	const articleData = await getArticleData(articleId)

	if (!articleData) {
		return {
			title: 'Article Not Found',
		}
	}
	return {
		title: articleData.title,
	}
}

type Params = {
	params: {
		articleId: string
	}
}

export default async function Article({ params }: Params) {
	const { articleId } = params

	const articleData = await getArticleData(articleId)
	const mdxOptions = {
		mdxOptions: {
			rehypePlugins: [rehypeHighlight],
		},
	}

	const content = articleData ? (
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
	) : (
		notFound()
	)

	return content
}
