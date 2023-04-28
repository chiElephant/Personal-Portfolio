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
				className='fixed inset-0 z-50 min-h-screen bg-p8/40 opacity-100 backdrop-blur-sm dark:bg-p9/80'
				aria-hidden='true'
				onClick={handleClick}
			></div>
			<div
				className='fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-p0 p-8 opacity-100 ring-1 ring-p9/5 dark:bg-p9 dark:ring-p8'
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
						<svg className='h-6 w-6 text-p5 dark:text-p4'>
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
					<h2 className='text-sm font-medium text-s6 dark:text-s3'>
						Navigation
					</h2>
				</div>
				<nav className='mt-6'>
					<ul className='-my-2 divide-y divide-p1 text-base text-s5 dark:divide-p1/5 dark:text-s2'>
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
