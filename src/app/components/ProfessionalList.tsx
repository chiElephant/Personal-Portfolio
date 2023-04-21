import WorkIcon from '@/app/icons/WorkIcon'
import DownloadResumeBtn from '@/components/DownloadResumeBtn'
import ProfessionalItem from './ProfessionalItem'
import getExperienceTypeList from '@/lib/getExperienceTypeList'

async function getList() {
	return await getExperienceTypeList('professional')
}

export default async function ProfessionalList() {
	const professionalExperiences = await getList()

	return (
		<div className='rounded-2xl border border-zinc-100 p-6 shadow-md dark:border-zinc-700/40'>
			{/* Experience List Heading and Icon */}
			<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
				<WorkIcon />
				<span className='ml-3'>Professional Experience</span>
			</h2>

			{/* Expereince List */}
			<ol className='mt-6 space-y-8'>
				{professionalExperiences.map((experienceId: string, i: number) => (
					/* @ts-expect-error Async Server Component Workaround */
					<ProfessionalItem
						key={i}
						experienceId={experienceId}
					/>
				))}
			</ol>
			<DownloadResumeBtn />
		</div>
	)
}
