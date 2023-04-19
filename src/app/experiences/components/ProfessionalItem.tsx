import Image from 'next/image'
import getExperienceData from '@/lib/getExperienceData'
import Link from 'next/link'

interface Props {
	experienceId: string
}
async function getData(experienceId: string) {
	return await getExperienceData('professional', experienceId)
}

export default async function ProfessionalItem({
	experienceId,
}: Props): Promise<JSX.Element> {
	const { company, role, dateStart, dateEnd, image, link } = await getData(
		experienceId
	)

	return (
		<li className='group'>
			<Link href='link'>
				<div className='flex w-full gap-4 rounded-md p-2 duration-200 group-hover:scale-105 group-hover:shadow-md'>
					<div className='relative mt-1 flex h-12 w-12 flex-none items-center justify-center overflow-clip rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
						<Image
							src={image}
							alt='Job'
							width={32}
							height={32}
							decoding='async'
							className='h-9 w-9 rounded-full'
							loading='lazy'
						/>
					</div>
					<dl className='flex flex-auto flex-wrap gap-x-2'>
						<dt className='sr-only'>{'Company'}</dt>
						<dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
							{company}
						</dd>
						<dt className='sr-only'>{'Role'}</dt>
						<dd className='text-xs text-zinc-500 dark:text-zinc-400'>{role}</dd>
						<dt className='sr-only'>{'Date'}</dt>
						<dd
							className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
							aria-label={`${dateStart} to ${dateEnd}`}
						>
							<time dateTime={dateStart}>{dateStart}</time>
							<span aria-hidden='true'> {dateEnd ? '— ' : 'Present'}</span>
							<time dateTime={dateEnd}>{dateEnd}</time>
						</dd>
					</dl>
				</div>
			</Link>
		</li>
	)
}
