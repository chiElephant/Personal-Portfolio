import { notFound } from 'next/navigation'
import Container from '@/app/components/Container'
import HeadingContainer from '@/app/components/HeadingContainer'
import InformationCard from '@/app/components/InformationCard'
import List from '@/app/components/List'
import getList from '@/lib/getList'
import getData from '@/lib/getData'

type Params = {
	params: {
		experienceType: string
		experienceId: string
	}
}

export async function generateStaticParams() {
	const list = await getList('experiences')

	if (list === null) {
		return notFound()
	}

	return list.map((experience: string) => {
		const experienceType = experience.split(':')[0]
		const experienceId = experience.split(':')[1]

		return {
			experienceType,
			experienceId,
		}
	})
}

export async function generateMetadata({ params }: Params) {
	const { experienceType, experienceId } = params
	const data = await getData(experienceType, experienceId)

	if (data === null) {
		return {
			title: 'Experience Not Found',
		}
	}

	const professionalTitle = {
		title: `${data.company} | ${data.role}`,
	}
	const educationTitle = {
		title: `${data.school} | ${data.focus}`,
	}
	const certificationTitle = { title: `${data.name} | ${data.issuingOrg}` }

	return experienceType === 'professional'
		? professionalTitle
		: experienceType === 'education'
		? educationTitle
		: certificationTitle
}

export default async function Experience({ params }: Params) {
	const { experienceType, experienceId } = params

	const content = (
		<main className='mt-42 mt-36 text-p7 dark:text-p1'>
			<Container>
				<div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<section className='lg:order-first lg:row-span-2'>
						{/* @ts-expect-error Server Component */}
						<HeadingContainer
							dataType={experienceType}
							dataId={experienceId}
							headingText={null}
							paragraphText={null}
						/>
						{/* @ts-expect-error Server Component */}
						<InformationCard
							dataType={experienceType}
							dataId={experienceId}
						/>
					</section>

					<section className='mt-16 lg:ml-24 lg:mt-40'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<List listType={experienceType} />
					</section>
				</div>
			</Container>
		</main>
	)

	return content
}
