import Image from 'next/image'

interface Props {
	experience: { [key: string]: string }
}

export default function ExperienceItem({ experience }: Props): JSX.Element {
	const {
		company,
		school,
		name,
		issuingOrg,
		role,
		focus,
		dateStart,
		dateEnd,
		issueDate,
		expireDate,
		certificationID,
		certificationURL,
		image,
	} = experience

	return (
		<li className='group'>
			<div className='flex w-full gap-4 duration-200 group-hover:scale-105 group-hover:shadow-lg'>
				<div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center overflow-clip rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
					<Image
						src={image}
						alt='Job'
						width={32}
						height={32}
						decoding='async'
						className='h-8 w-8 rounded-full'
						loading='lazy'
					/>
				</div>
				<dl className='flex flex-auto flex-wrap gap-x-2'>
					<dt className='sr-only'>
						{company ? 'Company' : school ? 'School' : 'Certification'}
					</dt>
					<dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
						{company ? company : school ? school : name}
					</dd>
					<dt className='sr-only'>
						{company ? 'Role' : school ? 'Focus' : 'Issuing Organization'}
					</dt>
					<dd className='text-xs text-zinc-500 dark:text-zinc-400'>
						{company ? role : school ? focus : issuingOrg}
					</dd>
					<dt className='sr-only'>Date</dt>
					<dd
						className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
						aria-label={`${dateStart} to ${dateEnd}`}
					>
						<time dateTime={dateStart ? dateStart : issueDate}>
							{dateStart ? dateStart : issueDate}
						</time>
						<span aria-hidden='true'> {dateEnd ? '—' : ''}</span>
						<time dateTime={dateEnd ? dateEnd : expireDate ? expireDate : ''}>
							{dateEnd ? dateEnd : expireDate ? expireDate : ''}
						</time>
					</dd>
				</dl>
			</div>
		</li>
	)
}
