import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import ArticlesList from '@/app/articles/components/ArticlesList'
import EmailListForm from '@/components/EmailListForm'
import ExperienceList from '@/app/experience/components/ExperienceList'
import SocilaList from '@/components/SocialList'
import ImageGrid from '@/components/ImageGrid'
import { heading, paragraph } from './text/home'
import { professional } from '@/app/experience/text/resume'
import getArticlesList from '@/lib/getArticlesList'

export default async function Home(): Promise<JSX.Element> {
	const articlesList = await getArticlesList(3)
	console.log(articlesList)
	const content = (
		<main className='mt-24'>
			<Container>
				<section>
					<HeadingContainer
						headingText={heading}
						paragraphText={paragraph}
					/>
					<ul className='mt-6 flex gap-6'>
						<SocilaList page={'home'} />
					</ul>
				</section>
			</Container>

			<ImageGrid />

			<Container>
				<section className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
					<div className='flex flex-col gap-16'>
						<ArticlesList
							page={'home'}
							articlesList={articlesList}
						/>
					</div>
					<div className='space-y-10 lg:pl-16 xl:pl-24'>
						<EmailListForm />
						<ExperienceList
							type={'Professional'}
							experiences={professional}
						/>
					</div>
				</section>
			</Container>
		</main>
	)
	return content
}
