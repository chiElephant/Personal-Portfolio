import Image from 'next/image'
import Link from 'next/link'
import StackGrid from '@/app/components/StackGrid'
import getData from '@/lib/getData'

interface Props {
	projectId: string
}

export default async function ProjectCard({
	projectId,
}: Props): Promise<JSX.Element> {
	const data = await getData('projects', projectId)

	if (data === null) {
		return <></>
	}

	const { name, image, icon, internalLink, summary, stack } = data

	return (
		<div className='group'>
			<li className='group relative mt-12 flex flex-col items-start rounded-2xl p-3 duration-200 group-hover:scale-105 md:max-w-xl'>
				<div className='group flex'>
					<div className='group relative z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-p0 shadow-md shadow-p8/5 ring-1 ring-p9/5 dark:border dark:border-p7/50 dark:bg-p8 dark:ring-0'>
						<Image
							src={icon}
							alt={name}
							width={52}
							height={52}
							decoding='async'
							className='rounded-lg'
							loading='lazy'
						/>
					</div>
					<h2 className='ml-4 mt-2 text-base font-semibold text-s7 dark:text-s3'>
						<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-p1 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-p8/50 sm:-inset-x-6 sm:rounded-2xl'></div>
						<Link href={internalLink}>
							<span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
							<span className='relative z-10'>{name}</span>
						</Link>
					</h2>
				</div>
				<p className='relative z-10 mt-6 text-sm text-p5 dark:text-p3'>
					{summary}
				</p>
				<StackGrid stack={stack} />
			</li>
		</div>
	)
}
