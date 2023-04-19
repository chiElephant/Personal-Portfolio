import getExperienceTypeList from '@/lib/getExperienceTypeList'
import CertificationItem from './CertificationItem'
import CertificationIcon from '@/app/icons/CertificationIcon'

export async function getList() {
	return await getExperienceTypeList('certifications')
}

export default async function CertificationsList() {
	const certificationsExperiences = await getList()

	return (
		<div className='mt-16 rounded-2xl border border-zinc-100 p-4 pt-6 shadow-md dark:border-zinc-700/40 md:p-10'>
			{/* Experience List Heading and Icon */}
			<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
				<CertificationIcon />
				<span className='ml-3'>Certifications</span>
			</h2>

			{/* Expereince List */}
			<ol className='space-y-16 pb-12 pt-16'>
				{certificationsExperiences.map((experienceId: string, i: number) => (
					/* @ts-expect-error Async Server Component Workaround */
					<CertificationItem
						key={i}
						experienceId={experienceId}
					/>
				))}
			</ol>
		</div>
	)
}
