import Link from 'next/link'
import SeeMoreIcon from '@/app/icons/SeeMoreIcon'
import getData from '@/lib/getData'

interface Props {
	articleId: string
	page: string
}

export default async function ArticleItem({ articleId, page }: Props) {
	const data = await getData('articles', articleId)

	if (data === null) {
		return <></>
	}

	const { title, link, date, excerpt } = data

	const content = (
		<>
			<article
				className={
					page === 'articles'
						? 'group md:grid md:grid-cols-4 md:items-baseline'
						: 'group relative flex flex-col items-start'
				}
			>
				<div className='group relative flex flex-col items-start duration-200 group-hover:scale-105 md:col-span-3'>
					<h2 className='text-base font-semibold tracking-tight text-s7 dark:text-s3'>
						<div className='transition-duration-100 absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-p1 opacity-0 group-hover:scale-100 group-hover:opacity-100  dark:bg-p8/50 sm:-inset-x-6 sm:rounded-2xl'></div>
						<Link href={link}>
							<span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
							<span className='relative z-10'>{title}</span>
						</Link>
					</h2>
					<time
						className={
							page === 'articles'
								? 'relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-p5 dark:text-p4 md:hidden'
								: 'relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-p5 dark:text-p4'
						}
						dateTime='2023-04-01'
					>
						<span
							className='absolute inset-y-0 left-0 flex items-center'
							aria-hidden='true'
						>
							<span className='h-4 w-0.5 rounded-full bg-p4'></span>
						</span>
						{date}
					</time>
					<p className='relative z-10 mt-2 text-sm text-p7 dark:text-p3'>
						{excerpt}
					</p>
					{/* <div
						aria-hidden='true'
						className='relative z-10 mt-4 flex items-center text-sm font-medium text-f4 dark:text-f1'
					>
						Read Article
						<SeeMoreIcon />
					</div> */}
				</div>
				{page === 'articles' ? (
					<time
						className='relative z-10 order-first mb-3 mt-1 hidden text-sm text-p5 dark:text-p4 md:block'
						dateTime='2023-04-01'
					>
						{date}
					</time>
				) : (
					''
				)}
			</article>
		</>
	)

	return content
}
