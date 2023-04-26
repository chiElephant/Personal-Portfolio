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
		<li className='group relative mt-12 flex flex-col items-start rounded-2xl p-3'>
			<div className='flex'>
				<div className='relative z-10 flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
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
				<h2 className='ml-4 mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
					<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
					<Link href={internalLink}>
						<span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
						<span className='relative z-10'>{name}</span>
					</Link>
				</h2>
			</div>
			<p className='relative z-10 mt-6 text-sm text-zinc-600 dark:text-zinc-400'>
				{summary}
			</p>
			<StackGrid stack={stack} />
		</li>
	)
}
