import React from 'react'
import getExperienceData from '@/lib/getExperienceData'
import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@/app/icons/LinkIcon'
import SeeMoreIcon from '../icons/SeeMoreIcon'

interface Props {
	experienceId: string
}

export default async function ProfessionalCard({ experienceId }: Props) {
	const { image, company, link, role, dateStart, dateEnd } =
		await getExperienceData('professional', experienceId)

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
				<div className='ml-6'>
					<h2 className='text-base font-semibold text-zinc-800 dark:text-zinc-100'>
						<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
						<Link href={link}>
							<span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
							<span className='relative z-10'>
								<div className='flex'>
									{company}
									<div className='flex items-center'>
										<SeeMoreIcon />
									</div>
								</div>
							</span>
						</Link>
					</h2>
					<div className='flex flex-col text-sm text-zinc-500 dark:text-zinc-400'>
						<p className='relative z-10'>{role}</p>
						<p className='text-xs text-zinc-500 dark:text-zinc-400'>{`${dateStart} - ${dateEnd}`}</p>
					</div>
				</div>
			</div>
		</li>
	)
}
