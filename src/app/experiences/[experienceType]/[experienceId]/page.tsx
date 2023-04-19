import { notFound } from 'next/navigation'
import getExperiencesList from '@/lib/getExperiencesList'
import getExperienceData from '@/lib/getExperienceData'
import ProfessionalExperience from './components/ProfessionalExperience'
import EducationalExperience from './components/EducationalExperience'
import CertificationExperience from './components/CertificationExperience'

type Params = {
	params: {
		experienceType: string
		experienceId: string
	}
}

export async function getList() {
	return await getExperiencesList()
}

export async function getData(experienceType: string, experienceId: string) {
	return await getExperienceData(experienceType, experienceId)
}

export async function experienceExists(
	experienceType: string,
	experienceId: string
) {
	const experiencesList = await getList()
	return experiencesList.find(
		(element) => element === `${experienceType}:${experienceId}`
	)
}

export async function generateStaticParams() {
	const experienceList = await getList()

	if (experienceList) {
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

	if (!exists) {
		return notFound()
	}

	const content =
		/* @ts-expect-error Async Server Component Workaround */
		experienceType === 'professional' ? (
			<ProfessionalExperience experienceId={experienceId} />
		) : /* @ts-expect-error Async Server Component Workaround */
		experienceType === 'education' ? (
			<EducationalExperience experienceId={experienceId} />
		) : (
			/* @ts-expect-error Async Server Component Workaround */
			<CertificationExperience experienceId={experienceId} />
		)

	return content
}
