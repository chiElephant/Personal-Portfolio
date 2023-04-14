import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@/app/icons/LinkIcon'

interface Project {
	[key: string]: any
}

export default function ProjectItem({ project }: Project): JSX.Element {
	return (
		<li className='group relative flex flex-col items-start'>
			<div className='relative z-10 flex h-12 w-12 items-center justify-center overflow-clip rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
				<Image
					src={project.imgSrc}
					alt='P'
					width={32}
					height={32}
					decoding='async'
					className='h-8 w-8'
					loading='lazy'
					style={{ color: 'transparent' }}
				/>
			</div>
			<h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
				<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
				<Link href={project.projectLink}>
					<span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
					<span className='relative z-10'>{project.projectName}</span>
				</Link>
			</h2>
			<p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
				{project.projectSummary}
			</p>
			<p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200'>
				<LinkIcon />
				<span className='ml-2'>{project.linkText}</span>
			</p>
		</li>
	)
}
