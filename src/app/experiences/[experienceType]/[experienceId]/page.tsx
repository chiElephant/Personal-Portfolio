import { notFound } from 'next/navigation'
import getExperiencesList from '@/lib/getExperiencesList'
import getExperienceData from '@/lib/getExperienceData'
import Container from '@/app/components/Container'
import HeadingContainer from '@/app/components/HeadingContainer'
import InformationCard from '@/app/components/InformationCard'
import ProfessionalList from '@/app/components/ProfessionalList'

type Params = {
	params: {
		experienceType: string
		experienceId: string
	}
}

async function getData(experienceType: string, experienceId: string) {
	return await getExperienceData(experienceType, experienceId)
}

async function getList() {
	return await getExperiencesList()
}

async function experienceExists(experienceType: string, experienceId: string) {
	const experiencesList = await getList()
	return experiencesList.find(
		(element) => element === `${experienceType}:${experienceId}`
	)
}

export async function generateStaticParams() {
	const experienceList = await getList()

	if (Boolean(experienceList)) {
		return experienceList.map((experience: string) => {
			const experienceType = experience.split(':')[0]
			const experienceId = experience.split(':')[1]

			return {
				experienceType,
				experienceId,
			}
		})
	}

	return notFound()
}

export async function generateMetadata({ params }: Params) {
	const { experienceType, experienceId } = params
	const exists = await experienceExists(experienceType, experienceId)

	if (!exists) {
		return {
			title: 'Experience Not Found',
		}
	}

	const experienceData = await getData(experienceType, experienceId)
	const professionalTitle = {
		title: `${experienceData.company} | ${experienceData.role}`,
	}
	const educationTitle = {
		title: `${experienceData.school} | ${experienceData.focus}`,
	}
	const certificationTitle = { title: `${experienceData.name}` }

	return experienceType === 'professional'
		? professionalTitle
		: experienceType === 'education'
		? educationTitle
		: certificationTitle
}

export default async function Experience({ params }: Params) {
	const { experienceType, experienceId } = params
	const exists = await experienceExists(experienceType, experienceId)

	if (Boolean(!exists)) {
		return notFound()
	}

	const content = (
		<main className='mt-42 mt-36 text-zinc-800 dark:text-zinc-100'>
			<Container>
				<div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<section className='lg:order-first lg:row-span-2'>
						{/* @ts-expect-error Server Component */}
						<HeadingContainer
							dataType={experienceType}
							dataId={experienceId}
							headingText={undefined}
							paragraphText={undefined}
						/>
						{/* @ts-expect-error Server Component */}
						<InformationCard
							dataType={experienceType}
							dataId={experienceId}
						/>
					</section>

					<section className='mt-16 lg:ml-24 lg:mt-40'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<ProfessionalList />
					</section>
				</div>
			</Container>
		</main>
	)

	return content
}
