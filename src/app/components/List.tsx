import WorkIcon from '@/app/icons/WorkIcon'
import DownloadResumeBtn from '@/components/DownloadResumeBtn'
import CertificationIcon from '@/app/icons/CertificationIcon'
import ListItem from './ListItem'
import EducationIcon from '@/app/icons/EducationIcon'
import getCapitalizedString from '@/lib/getCapitalizedString'
import StackIcon from '../icons/StackIcon'
import getList from '@/lib/getList'

interface Props {
	listType: string
}

export default async function List({ listType }: Props) {
	const capitalizedType = await getCapitalizedString(listType)
	const list = await getList(listType)

	if (listType.split(':')[0] === 'stack') {
		listType = 'stack'
	}

	if (list === null) {
		return <></>
	}

	const content = (
		<div className='rounded-2xl border border-p1 p-4 pt-6 shadow-md shadow-p3 dark:border-p7/40 dark:shadow-p10 dark:ring-1 dark:ring-p10 lg:p-6'>
			<h2 className='flex text-sm font-semibold text-p8 dark:text-p1'>
				{listType === 'professional' ? (
					<WorkIcon />
				) : listType === 'education' ? (
					<EducationIcon />
				) : listType === 'certifications' ? (
					<CertificationIcon />
				) : (
					<StackIcon />
				)}

				{/* Professional list headers is 'Professional Experience other headers are '[listType]'*/}
				<span className='ml-3'>
					{listType === 'professional'
						? `${capitalizedType} Experience`
						: listType === 'education' ||
						  listType === 'certifications' ||
						  listType === 'projects'
						? `${capitalizedType}`
						: `Tech Stack`}
				</span>
			</h2>

			<ol className='mt-12 space-y-10'>
				{list.map((itemId: string) => (
					/* @ts-expect-error Async Server Component Workaround */
					<ListItem
						key={itemId}
						dataType={listType}
						dataId={itemId}
					/>
				))}
			</ol>

			{listType === 'professional' ? <DownloadResumeBtn /> : ''}
		</div>
	)

	return content
}
