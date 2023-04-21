import React from 'react'
import getExperienceData from '@/lib/getExperienceData'
import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@/app/icons/LinkIcon'

interface Props {
	experienceId: string
}

export default async function ProfessionalCard({ experienceId }: Props) {
	const { image, company, link, role } = await getExperienceData(
		'professional',
		experienceId
	)

	return (
		<li className='group relative flex flex-col items-start'>
			<div className='flex justify-between'>
				<div className='relative z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
					<Image
						src={image}
						alt={company}
						width={52}
						height={52}
						decoding='async'
						className='rounded-lg'
						loading='lazy'
					/>
				</div>
				<div className='ml-4 mt-2'>
					<h2 className='text-base font-semibold text-zinc-800 dark:text-zinc-100'>
						<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
						<Link href={link}>
							<span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
							<span className='relative z-10'>{company}</span>
						</Link>
					</h2>
					<p className='relative z-10  text-sm text-zinc-600 dark:text-zinc-400'>
						{role}
					</p>
				</div>
			</div>
			<p className='relative z-10 mt-8 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200'>
				<LinkIcon />
				<span className='ml-2'>More Info</span>
			</p>
		</li>
	)
}
