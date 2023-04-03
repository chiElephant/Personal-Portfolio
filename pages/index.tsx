import { Url } from 'next/dist/shared/lib/router/router'
import Meta from '@/components/Meta'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import PostsList from '@/components/PostsList'
import EmailListForm from '@/components/EmailListForm'
import ExperienceList from '@/components/ExperienceList'
import SocilaLinks from '@/components/SocialLinks'
import ImageGrid from '@/components/ImageGrid'
import { heading, paragraph} from '@/text/home'

interface ExternalLinks {
	[key: string]: Url
}

export default function Home() {

	return (
		<>
			<Meta page='Home' />
			<main>
				<Container>
					<section>
						<Heading
							headingText={heading}
							paragraphText={paragraph}
						></Heading>
						<SocilaLinks />
					</section>
				</Container>

				<ImageGrid/>

				<Container>
					<section className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
						<div className="flex flex-col gap-16">
							<PostsList page={'home'}/>
						</div>
						<div className='space-y-10 lg:pl-16 xl:pl-24'>
							<EmailListForm />
							<ExperienceList />
						</div>
					</section>
				</Container>
			</main>
		</>
	)
}
