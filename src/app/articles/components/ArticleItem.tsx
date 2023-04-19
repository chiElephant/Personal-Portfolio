import Link from 'next/link'
import SeeMoreIcon from '@/app/icons/SeeMoreIcon'
import getArticleData from '@/lib/getArticleData'
import { notFound } from 'next/navigation'

interface Props {
	articleId: string
	page: string
}

export async function getData(articleId: string) {
	return await getArticleData(articleId)
}

export default async function ArticleItem({ articleId, page }: Props) {
	const articleData = await getData(articleId)

	return articleData !== undefined ? (
		<>
			<article
				className={
					page === 'articles'
						? 'group md:grid md:grid-cols-4 md:items-baseline'
						: 'group relative flex flex-col items-start'
				}
			>
				<div className='group relative flex flex-col items-start duration-200 group-hover:scale-105 md:col-span-3'>
					<h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
						<div className='transition-duration-100 absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 group-hover:scale-100 group-hover:opacity-100  dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
						<Link href={articleData.link}>
							<span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
							<span className='relative z-10'>{articleData.title}</span>
						</Link>
					</h2>
					<time
						className={
							page === 'articles'
								? 'relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden'
								: 'relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500'
						}
						dateTime='2023-04-01'
					>
						<span
							className='absolute inset-y-0 left-0 flex items-center'
							aria-hidden='true'
						>
							<span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
						</span>
						{articleData.date}
					</time>
					<p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
						{articleData.excerpt}
					</p>
					<div
						aria-hidden='true'
						className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'
					>
						Read Article
						<SeeMoreIcon />
					</div>
				</div>
				{page === 'articles' ? (
					<time
						className='relative z-10 order-first mb-3 mt-1 hidden text-sm text-zinc-400 dark:text-zinc-500 md:block'
						dateTime='2023-04-01'
					>
						{articleData.date}
					</time>
				) : (
					''
				)}
			</article>
		</>
	) : (
		notFound()
	)
}
