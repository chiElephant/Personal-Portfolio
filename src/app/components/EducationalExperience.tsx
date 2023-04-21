import React from 'react'
import Container from '@/components/Container'
import HeadingContainer from '@/components/HeadingContainer'
import getExperienceData from '@/lib/getExperienceData'
import { notFound } from 'next/navigation'

interface Props {
	experienceId: string
}

async function getData(experienceType: string, experienceId: string) {
	return await getExperienceData(experienceType, experienceId)
}

export default async function EducationalExperience({ experienceId }: Props) {
	const experienceData = await getData('education', experienceId)

	return experienceData ? (
		<main className=' mx-auto mt-20 max-w-xl px-6 md:mt-14 md:max-w-7xl'>
			<Container>
				<header className='mb-10 max-w-2xl'>
					<HeadingContainer
						headingText={experienceData.school}
						paragraphText={experienceData.focus}
					/>
				</header>
				<article className=' article prose prose-xl dark:prose-invert'></article>
			</Container>
		</main>
	) : (
		notFound()
	)
}
