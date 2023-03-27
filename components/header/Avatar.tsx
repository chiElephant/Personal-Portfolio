import Image from 'next/image'

export default function Avatar() {
	return (
		<div className='flex flex-1'>
			<div className='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'>
				<a
					href='/about'
					className='pointer-events-auto'
					aria-label='About'
				>
					<Image
						alt=''
						sizes='2.25rem'
						src='/avatar/64.png'
						width={512}
						height={512}
						decoding='async'
						className='color-transparent h-9 w-9 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
					/>
				</a>
			</div>
		</div>
	)
}
