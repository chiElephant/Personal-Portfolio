import EducationItem from './EducationItem'
import EducationIcon from '@/app/icons/EducationIcon'
import getExperienceTypeList from '@/lib/getExperienceTypeList'

async function getList() {
	return await getExperienceTypeList('education')
}

export default async function EducationlList() {
	const educationExperiences = await getList()

	return (
		<div className='mt-16 rounded-2xl border border-zinc-100 p-4 pt-6 shadow-md dark:border-zinc-700/40 md:p-10'>
			{/* Experience List Heading and Icon */}
			<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
				<EducationIcon />
				<span className='ml-3'>Education</span>
			</h2>

			{/* Expereince List */}
			<ol className='space-y-16 pb-12 pt-16'>
				{educationExperiences.map((experienceId: string, i: number) => (
					/* @ts-expect-error Async Server Component Workaround */
					<EducationItem
						key={i}
						experienceId={experienceId}
					/>
				))}
			</ol>
		</div>
	)
}
