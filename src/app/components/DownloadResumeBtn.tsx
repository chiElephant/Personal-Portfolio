import Link from 'next/link'
import DownloadIcon from '../icons/DownloadIcon'

export default function DownloadResumeBtn() {
	return (
		<>
			<Link
				href='/'
				className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
			>
				Download Resume
				<DownloadIcon />
			</Link>
		</>
	)
}
