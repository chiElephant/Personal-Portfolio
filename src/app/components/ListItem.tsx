import Image from 'next/image'
import Link from 'next/link'
import getData from '@/lib/getData'

interface Props {
	dataType: string
	dataId: string
}

export default async function ListItem({ dataType, dataId }: Props) {
	const data = await getData(dataType, dataId)

	if (data === null) {
		return <></>
	}

	const content = (
		<li className='group'>
			<Link href={data.internalLink || data.stackLink}>
				<div className='flex w-full gap-4 rounded-md p-2 duration-200 group-hover:scale-105 group-hover:shadow-md'>
					<div className='group-hover:box-shadow-md flex flex-row rounded-lg p-2 duration-200 group-hover:scale-105 group-hover:bg-p2'>
						<Image
							src={data.icon}
							alt={data.name || data.school || data.company}
							width={40}
							height={40}
							decoding='async'
							className='rounded-lg shadow-lg shadow-p4 dark:shadow-p10'
							loading='lazy'
						/>
					</div>

					<dl className='flex flex-auto flex-wrap place-content-center'>
						{/* <div className="flex flex-col items-center"> */}
						<dt className='sr-only'>{'Name'}</dt>
						<dd className='w-full flex-none text-sm font-medium text-s7 dark:text-s3'>
							{data.company || data.name || data.school}
						</dd>

						{/* Add role, focus or issuing organization if not a stack list */}
						{dataType !== 'stack' ? (
							<>
								<dt className='sr-only'>{'Focus'}</dt>
								<dd className='text-xs text-p5 dark:text-p3'>
									{data.role || data.issuingOrg || data.focus}
								</dd>
								<dt className='sr-only'>{'Date'}</dt>
							</>
						) : (
							''
						)}
						{/* </div> */}

						{dataType === 'certifications' ? (
							<dd
								className='ml-auto text-xs text-p5 dark:text-p3'
								aria-label={`${data.issueDate}`}
							>
								<time dateTime={data.issueDate}>{data.issueDate}</time>
							</dd>
						) : (
							''
						)}

						{dataType === 'professional' || dataType === 'education' ? (
							<dd
								className='ml-auto text-xs text-p5 dark:text-p3'
								aria-label={`${data.dateStart} to ${data.dateEnd}`}
							>
								<time dateTime={data.dateStart}>{data.dateStart}</time>
								{` - `}
								<time dateTime={data.dateEnd}>{data.dateEnd}</time>
							</dd>
						) : (
							''
						)}
					</dl>
				</div>
			</Link>
		</li>
	)
	return content
}
