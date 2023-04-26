import SocialList from './SocialList'
import getData from '@/lib/getData'

interface Props {
	headingText: string | null
	paragraphText: string | null
	dataId: string | null
	dataType: string | null
}
export default async function HeadingContainer({
	headingText,
	paragraphText,
	dataType,
	dataId,
}: Props) {
	if (headingText && paragraphText) {
		return (
			<header className='max-w-2xl'>
				<h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
					{headingText}
				</h1>
				<p className='mt-2 text-base font-medium text-zinc-600 dark:text-zinc-400'>
					{paragraphText}
				</p>
			</header>
		)
	}

	if (dataType && dataId) {
		const data = await getData(dataType, dataId)

		if (data === null) {
			return <></>
		}

		const content = (
			<header className='max-w-2xl'>
				<h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
					{data.name || data.school || data.company || data.title}
				</h1>
				<p className='mt-2 text-base font-medium text-zinc-600 dark:text-zinc-400'>
					{data.role || data.focus || data.issuingOrg || data.date}
				</p>

				{/* If the dataType is experience or education add the start and end dates to the header */}
				{dataType === 'professional' || dataType === 'education ' ? (
					<p className='mt-1 text-base font-medium text-zinc-600 dark:text-zinc-400'>{`${data.dateStart} - ${data.dateEnd}`}</p>
				) : (
					''
				)}

				{/* If the dataType is certification add the issue date */}
				{dataType === 'certifications' ? (
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
}
