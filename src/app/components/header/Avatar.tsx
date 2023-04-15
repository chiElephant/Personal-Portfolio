import Image from 'next/image'
import Link from 'next/link'

export default function Avatar() {
	return (
		<div
			className='flex flex-1'
			data-testid='avatar'
		>
			<div className='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'>
				<Link
					href='/'
					className='pointer-events-auto'
					aria-label='About'
				>
					<Image
						alt=''
						src='/avatar.webp'
						width={36}
						height={36}
						decoding='async'
						className='color-transparent h-9 w-9 rounded-full bg-zinc-100 dark:bg-zinc-800'
					/>
				</Link>
			</div>
		</div>
	)
}
