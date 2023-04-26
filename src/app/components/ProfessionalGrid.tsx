import ProfessionalCard from './ProfessionalCard'
import WorkIcon from '@/app/icons/WorkIcon'
import getList from '@/lib/getList'

interface Props {
	projects: any
}

export default async function ProfessionalGrid(): Promise<JSX.Element> {
	const list = await getList('professional')

	if (list === null) {
		return <></>
	}

	const content = (
		<div className='rounded-2xl border border-zinc-100 p-4 pt-6 shadow-md dark:border-zinc-700/40 md:p-10'>
			<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
				<WorkIcon />
				<span className='ml-3'>Professional Experience</span>
			</h2>
			<ol className='grid grid-cols-1 gap-x-16 gap-y-20 px-2 pb-16 pt-16 md:px-6 lg:grid-cols-2'>
				{list.map((experienceId: string) => (
					/* @ts-expect-error Server Component */
					<ProfessionalCard
						key={experienceId}
						experienceId={experienceId}
					/>
				))}
			</ol>
		</div>
	)

	return content
}
