import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeHighlight from 'rehype-highlight/lib'
import Link from 'next/link'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import getList from '@/lib/getList'
import getData from '@/lib/getData'

type Params = {
	params: {
		articleId: string
	}
}

export async function generateStaticParams() {
	const list = await getList('articles')

	if (list === null) {
		return notFound()
	}

	return list.map((articleId: string) => ({
		articleId,
	}))
}

export async function generateMetadata({ params }: Params) {
	const { articleId } = params
	const data = await getData('articles', articleId)

	if (data === null) {
		return {
			title: 'Article Not Found',
		}
	}
	return {
		title: data.title,
	}
}

export default async function Article({ params }: Params) {
	const { articleId } = params
	const data = await getData('articles', articleId)

	const mdxOptions = {
		mdxOptions: {
			rehypePlugins: [rehypeHighlight],
		},
	}

	if (data === null) {
		return notFound()
	}

	const content = (
		<main className=' mx-auto mt-20 max-w-xl px-6 md:mt-14 md:max-w-7xl'>
			<Container>
				<header className='mb-10 max-w-2xl'>
					{/* @ts-expect-error Async Server Component Workaround */}
					<HeadingContainer
						headingText={null}
						paragraphText={null}
						dataType={'articles'}
						dataId={articleId}
					/>
				</header>
				<article className=' article prose prose-xl dark:prose-invert'>
					{/* @ts-expect-error Async Server Component Workaround */}
					<MDXRemote
						source={data.content}
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
