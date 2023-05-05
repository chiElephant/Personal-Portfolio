import Link from 'next/link'
import DownloadIcon from '../icons/DownloadIcon'

export default function DownloadResumeBtn() {
	return (
		<div className='my-10 flex justify-center'>
			<Link
				href='/Anthony_Merino_resume.pdf'
				locale={false}
				target='_blank'
				rel='noopener noreferrer'
				download
				className='ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-p8 px-3 py-2 text-sm font-semibold text-p1 outline-offset-2 transition hover:bg-p7 active:bg-p8 active:text-s4 active:transition-none dark:bg-p7 dark:hover:bg-p6 dark:active:bg-p7 active:dark:text-s3'
			>
				Download Resume
				<DownloadIcon />
			</Link>
		</div>
	)
}
