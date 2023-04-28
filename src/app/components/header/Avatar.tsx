import Image from 'next/image'
import Link from 'next/link'

export default function Avatar() {
	return (
		<div
			className='flex flex-1'
			data-testid='avatar'
		>
			<div className='h-10 w-10 rounded-full bg-p0/90 p-0.5 shadow-lg shadow-p8/5 ring-1 ring-p9/5 backdrop-blur dark:bg-p9/90 dark:ring-p0/10'>
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
						className='color-transparent h-9 w-9 rounded-full bg-p1 dark:bg-p8'
					/>
				</Link>
			</div>
		</div>
	)
}
