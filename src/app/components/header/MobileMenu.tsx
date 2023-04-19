interface Props {
	isOpen: boolean
	setIsOpen: Function
}

export default function MobileMenu({ isOpen, setIsOpen }: Props) {
	const pages = ['Home', 'About', 'Projects', 'Experiences', 'Articles']

	const handleClick = () => {
		setIsOpen(false)
	}

	return isOpen ? (
		<div>
			<div
				className='fixed inset-0 z-50 min-h-screen bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80'
				aria-hidden='true'
				onClick={handleClick}
			></div>
			<div
				className='fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'
				tabIndex={-1}
			>
				<div className='flex flex-row-reverse items-center justify-between'>
					<button
						aria-label='Close menu'
						type='button'
						className='-m-1 p-1'
						tabIndex={0}
						onClick={handleClick}
					>
						<svg className='h-6 w-6 text-zinc-500 dark:text-zinc-400'>
							<path
								d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
						Navigation
					</h2>
				</div>
				<nav className='mt-6'>
					<ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
						{pages.map((page) => (
							<li
								key={page}
								onClick={handleClick}
							>
								<a
									className='block py-2'
									href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
								>
									{page}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	) : (
		<></>
	)
}
