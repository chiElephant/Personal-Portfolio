import getProjectData from '@/lib/getProjectsData'
import SocialList from './SocialList'
import getExperienceData from '@/lib/getExperienceData'
interface Props {
	headingText: string | undefined
	paragraphText: string | undefined
	dataId: string | undefined
	dataType: string | undefined
}
export default async function HeadingContainer({
	headingText,
	paragraphText,
	dataType,
	dataId,
}: Props) {
	let data

	// If the heading is for Experience[id], Projects[id]
	if (dataId && dataType) {
		if (dataType === 'project') {
			data = await getProjectData(dataId)
		} else {
			data = await getExperienceData(dataType, dataId)
		}

		const content = (
			<header className='max-w-2xl'>
				<h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
					{data.name || data.school || data.company}
				</h1>
				<p className='mt-2 text-base font-medium text-zinc-600 dark:text-zinc-400'>
					{data.summary || data.role || data.focus || data.issuingOrg}
				</p>

				{/* If the dataType is experience or education add the start and end dates to the header */}
				{dataType === 'professional' || dataType === 'education ' ? (
					<p className='mt-1 text-base font-medium text-zinc-600 dark:text-zinc-400'>{`${data.dateStart} - ${data.dateEnd}`}</p>
				) : (
					''
				)}

				{/* If the dataType is certification add the issue date */}
				{dataType === 'certification' ? (
					<p className='text-base font-medium text-zinc-600 dark:text-zinc-400'>{`${data.issueDate}`}</p>
				) : (
					''
				)}

				<ul className='mt-6 flex gap-6'>
					<SocialList style={'columns'} />
				</ul>
			</header>
		)

		return content
	}

	// If the heading is for Home, Articles, or About
	return (
		<header className='max-w-2xl'>
			<h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
				{headingText}
			</h1>
			<p className='mt-6 text-base font-medium text-zinc-600 dark:text-zinc-400'>
				{paragraphText}
			</p>
			<ul className='mt-6 flex gap-6'>
				<SocialList style={'columns'} />
			</ul>
		</header>
	)
}
