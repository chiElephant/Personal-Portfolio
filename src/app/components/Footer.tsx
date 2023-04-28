export default function Footer() {
	const pages = ['Home', 'About', 'Projects', 'Experiences', 'Articles']

	return (
		<footer
			className='mt-32'
			data-testid='footer'
		>
			<div className='sm:px-8'>
				<div className='mx-auto max-w-7xl lg:px-8'>
					<div className='border-t border-p1 pb-16 pt-10 dark:border-p7/40'>
						<div className='relative px-4 sm:px-8 lg:px-12'>
							<div className='mx-auto max-w-2xl lg:max-w-5xl'>
								<div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
									<div className='flex gap-4 text-sm font-medium text-p5 dark:text-p3'>
										{pages.map((page) => (
											<a
												key={page}
												href={page === 'Home' ? '/' : `/${page}`.toLowerCase()}
												className='transition hover:text-s5 dark:hover:text-s4'
											>
												{page}
											</a>
										))}
									</div>

									<div className='flex flex-col text-sm text-p5 dark:text-p4 lg:flex-row'>
										<p>&copy;2023 Anthony Merino.</p>
										<p className='flex justify-center md:ml-2'>
											All rights reserved.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
