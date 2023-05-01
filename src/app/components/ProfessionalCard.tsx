import Image from 'next/image'
import Link from 'next/link'
import SeeMoreIcon from '../icons/SeeMoreIcon'
import getData from '@/lib/getData'

interface Props {
	experienceId: string
}

export default async function ProfessionalCard({ experienceId }: Props) {
	const data = await getData('professional', experienceId)

	if (data === null) {
		return <></>
	}

	const { icon, company, internalLink, role, dateStart, dateEnd } = data

	return (
		<div className='group'>
			<li className='group relative flex flex-col items-start duration-200 group-hover:scale-105'>
				<div className='flex justify-between'>
					<div className='relative z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-p0 shadow-md shadow-p8/5 ring-1 ring-p9/5 dark:border dark:border-p7/50 dark:bg-p8 dark:ring-0'>
						<Image
							src={icon}
							alt={company}
							width={52}
							height={52}
							decoding='async'
							className='rounded-lg'
							loading='lazy'
						/>
					</div>
					<div className='ml-6'>
						<h2 className='text-base font-semibold text-s7 dark:text-s3'>
							<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-p1 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-p8/50 sm:-inset-x-6 sm:rounded-2xl'></div>
							<Link href={internalLink}>
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
						<div className='flex flex-col text-sm text-p8/50 dark:text-p1'>
							<p className='relative z-10'>{role}</p>
							<p className='group z-40 text-xs text-p4 dark:text-p5'>{`${dateStart} - ${dateEnd}`}</p>
						</div>
					</div>
				</div>
			</li>
		</div>
	)
}
