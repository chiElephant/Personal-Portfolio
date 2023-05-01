import type { Metadata } from 'next'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ArticlesList from '@/components/ArticlesList'
import EmailListForm from '@/components/EmailListForm'
import SocilaLList from '../components/SocialList'
import HeroImage from '../components/HeroImage'
import getList from '@/lib/getList'

export const metadata: Metadata = {
	title: 'Articles',
}

export default async function Articles(): Promise<JSX.Element> {
	const articlesList = await getList('articles')

	const content: JSX.Element = (
		<main className='mt-12 md:mt-28'>
			<Container>
				<div
					className='grid grid-cols-1 gap-y-16 lg:grid-cols-2
				lg:grid-rows-[auto_1fr] lg:gap-y-12'
				>
					{/* @ts-expect-error Async Server Component Workaround */}
					<HeroImage
						dataType={null}
						dataId={null}
						style={`-rotate-3 rounded-2xl drop-shadow-2xl dark:drop-shadow-[0_10px_8px_rgba(0,0,0,1)]`}
						image={'/blog2.png'}
					/>
					<section className='flex items-center lg:row-span-2'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<HeadingContainer
							headingText={
								'Writing on software development, web3, and topics I find interesting'
							}
							paragraphText={`My thoughts, rantings, and advice on technology, leadership, and industry. Tools I use or am exploring and tips of the trade I've picked up along the way.`}
							dataType={null}
							dataId={null}
						/>
					</section>
				</div>
			</Container>
			<Container>
				<section className='mx-auto mt-32 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
					<div className='mb-32 flex max-w-3xl flex-col space-y-16 md:border-l md:border-p1 md:pl-6 md:dark:border-p7/40'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<ArticlesList
							page={'articles'}
							length={-1}
						/>
					</div>
					<div className='flex flex-col'>
						<div className='space-y-10 lg:pl-20 xl:pl-24'>
							<EmailListForm />
						</div>
						<div className='mt-20 lg:pl-20'>
							<ul>
								<SocilaLList style={'rows'} />
							</ul>
						</div>
					</div>
				</section>
			</Container>
		</main>
	)

	return content
}
