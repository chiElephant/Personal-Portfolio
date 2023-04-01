import Image from 'next/image'
import Link from 'next/link'
import socialSVGs from '@/svg_paths/social'

import Meta from '@/components/Meta'

export default function Home() {
	return (
		<>
			<Meta page='Home' />
			<main>
				{/* Main Header, Welcome, and Social */}
				<div className='mt-24 sm:px-8'>
					<div className='mx-auto max-w-7xl lg:px-8 '>
						<div className='relative px-4 sm:px-8 lg:px-12'>
							<div className='mx-auto max-w-2xl lg:max-w-5xl'>
								<div className='max-w-2xl'>
									<h1 className='text-4xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
										Full Stack engineer, sommelier, and Ironman finisher.
									</h1>
									<p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
										{' '}
										{`Hello there! I'm Anthony, a software engineer and entrepreneur who calls beautiful Boulder, Colorado home. I'm a natural problem-solver, and welcome the opportunity to apply my varied skill sets to tackle new challenges, break down boundaries, and discover innovative solutions. My mission is to help people realize their dreams, overcome obstacles, and achieve what they once thought impossible. If you're in search of a partner who is passionate, innovative, and devoted to excellence, I'd love to connect with you and help bring ideas to life!`}{' '}
									</p>
									<div className='mt-6 flex gap-6'>
										<a
											href='http://twitter.com'
											aria-label='Follow on Twitter'
										>
											<svg
												viewBox='0 0  24 24'
												aria-hidden='true'
												className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
											>
												{socialSVGs.twitter}
											</svg>
										</a>
										<a
											href='http://instagram.com'
											aria-label='Follow on Instagram'
										>
											<svg
												viewBox='0 0  24 24'
												aria-hidden='true'
												className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
											>
												{socialSVGs.instagram}
											</svg>
										</a>
										<a
											href='http://github/chi'
											aria-label='Follow on GitHub'
										>
											<svg
												viewBox='0 0  24 24'
												aria-hidden='true'
												className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
											>
												{socialSVGs.github}
											</svg>
										</a>
										<a
											href='http//linkedin.com/anthonymerino'
											aria-label='Follow on LinkedIn'
										>
											<svg
												viewBox='0 0  24 24'
												aria-hidden='true'
												className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
											>
												<path />
												{socialSVGs.linkedin}
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Images */}
				<div className='mt-16 sm:mt-20'>
					<div className='my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
						<div className='relative flex aspect-[9/10] w-44 -rotate-2 justify-center overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl'>
							<Image
								src='/1.jpg'
								alt='LOGO'
								width={3936}
								height={2624}
							/>
						</div>
						<div className='relative flex aspect-[9/10] w-44 rotate-2 justify-center overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl'>
							<Image
								src='/new.png'
								alt='LOGO'
								width={3936}
								height={2624}
							/>
						</div>
						<div className='relative flex aspect-[9/10] w-44 rotate-2 justify-center overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl'>
							<Image
								src='/1.jpg'
								alt='LOGO'
								width={3936}
								height={2624}
							/>
						</div>
						<div className='relative flex aspect-[9/10] w-44 -rotate-2 justify-center overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl'>
							<Image
								src='/new.png'
								alt='LOGO'
								width={3936}
								height={2624}
							/>
						</div>
					</div>
				</div>

				{/* Blog Blurbs, Links, CTA, Experience */}
				<div className='mt-24 sm:px-8 md:mt-28'>
					<div className='mx-auto max-w-7xl lg:px-8'>
						<div className='relative px-4 sm:px-8 lg:px-12'>
							<div className='mx-auto max-w-2xl lg:max-w-5xl'>

								{/* Blog Cards */}
								<div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
									<div className='flex flex-col gap-16'>

										{/* Blog Post */}
										<article className='group relative flex flex-col items-start'>
											<h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
												<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
												<Link href='/articles'>
													<span className='s:-inset-x-6 absolute -inset-x-4 -inset-y-6 z-20 sm:rounded-2xl'></span>
													<span className='relative z-10'>
														Here is Some Test Title For a Medium Article
													</span>
												</Link>
											</h2>
											<time
												className='text sm relative z-10 order-first mb-3 flex items-center pl-3.5 text-zinc-400 dark:text-zinc-500'
												dateTime='2202-09-05'
											>
												<span
													className='absolute inset-y-0 left-0 flex items-center'
													aria-hidden='true'
												>
													<span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
												</span>
												{'April 1, 2023'}
											</time>
											<p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Veritatis libero nam delectus repudiandae
												voluptatum veniam illum natus, dolor labore sequi animi
												atque mollitia voluptates laboriosam, laudantium tempore
												consequatur, blanditiis quaerat autem saepe obcaecati
												provident perferendis. Error corporis quaerat a enim
												ipsa illo sunt debitis. Voluptates molestiae sunt
												consectetur itaque ipsum?
											</p>
											<div
												aria-hidden='true'
												className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'
											>
												Read Article
												<svg className='ml-1 h-4 w-4 stroke-current'>
													<path
														d='M6.75 5.75 9.25 8l-2.5 2.25'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													></path>
												</svg>
											</div>
										</article>

										{/* Blog Post */}
										<article className='group relative flex flex-col items-start'>
											<h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
												<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
												<Link href='/articles'>
													<span className='s:-inset-x-6 absolute -inset-x-4 -inset-y-6 z-20 sm:rounded-2xl'></span>
													<span className='relative z-10'>
														Here is Some Test Title For a Medium Article
													</span>
												</Link>
											</h2>
											<time
												className='text sm relative z-10 order-first mb-3 flex items-center pl-3.5 text-zinc-400 dark:text-zinc-500'
												dateTime='2202-09-05'
											>
												<span
													className='absolute inset-y-0 left-0 flex items-center'
													aria-hidden='true'
												>
													<span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
												</span>
												{'April 1, 2023'}
											</time>
											<p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Veritatis libero nam delectus repudiandae
												voluptatum veniam illum natus, dolor labore sequi animi
												atque mollitia voluptates laboriosam, laudantium tempore
												consequatur, blanditiis quaerat autem saepe obcaecati
												provident perferendis. Error corporis quaerat a enim
												ipsa illo sunt debitis. Voluptates molestiae sunt
												consectetur itaque ipsum?
											</p>
											<div
												aria-hidden='true'
												className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'
											>
												Read Article
												<svg className='ml-1 h-4 w-4 stroke-current'>
													<path
														d='M6.75 5.75 9.25 8l-2.5 2.25'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													></path>
												</svg>
											</div>
										</article>

										{/* Blog Post */}
										<article className='group relative flex flex-col items-start'>
											<h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
												<div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
												<Link href='/articles'>
													<span className='s:-inset-x-6 absolute -inset-x-4 -inset-y-6 z-20 sm:rounded-2xl'></span>
													<span className='relative z-10'>
														Here is Some Test Title For a Medium Article
													</span>
												</Link>
											</h2>
											<time
												className='text sm relative z-10 order-first mb-3 flex items-center pl-3.5 text-zinc-400 dark:text-zinc-500'
												dateTime='2202-09-05'
											>
												<span
													className='absolute inset-y-0 left-0 flex items-center'
													aria-hidden='true'
												>
													<span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
												</span>
												{'April 1, 2023'}
											</time>
											<p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Veritatis libero nam delectus repudiandae
												voluptatum veniam illum natus, dolor labore sequi animi
												atque mollitia voluptates laboriosam, laudantium tempore
												consequatur, blanditiis quaerat autem saepe obcaecati
												provident perferendis. Error corporis quaerat a enim
												ipsa illo sunt debitis. Voluptates molestiae sunt
												consectetur itaque ipsum?
											</p>
											<div
												aria-hidden='true'
												className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'
											>
												Read Article
												<svg className='ml-1 h-4 w-4 stroke-current'>
													<path
														d='M6.75 5.75 9.25 8l-2.5 2.25'
														strokeWidth='1.5'
														strokeLinecap='round'
														strokeLinejoin='round'
													></path>
												</svg>
											</div>
										</article>
									</div>

									{/* Email list CTA */}
									<div className='space-y-10 lg:pl-16 xl:pl-24'>
										<form
											action='/thank-you'
											className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
										>
											<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													strokeWidth={1.5}
													strokeLinecap='round'
													strokeLinejoin='round'
													aria-hidden='true'
													className='h-6 w-6 flex-none'
												>
													<path
														d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
														className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
													></path>
													<path
														d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6'
														className='stroke-zinc-400 dark:stroke-zinc-500'
													></path>
												</svg>
												<span className='ml-3'>Stay up to date</span>
											</h2>
											<p className='text-s mt-2 text-zinc-600 dark:text-zinc-400'>
												Get notified when I post something new, and unsubscribe
												at any time.
											</p>
											<div className='mt-6 flex'>
												<input
													type='email'
													placeholder='Email address'
													aria-label='Email addreess'
													required
													className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm'
												/>
												<button className='ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'>
													Join
												</button>
											</div>
										</form>

										{/* Experience */}
										<div className='rounded-2-xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
											{/* Experience Heading */}
											<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
												<svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden='true' className=" h-6 w-6 flex-none">
													<path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
													<path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
												</svg>
												<span className="ml-3">Experience</span>
											</h2>

											{/* Experience List */}
											<ol className='mt-6 space-y-8'>

												{/* Expereince Card */}
												<li className="flex gap-4">
													<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-clip">
														<Image src='/1.svg' alt='Job' width={32} height={32} decoding='async' className='h-10 w-10' loading='lazy'/>
													</div>
													<dl className="flex flex-auto flex-wrap gap-x-2">
														<dt className="sr-only">Company</dt>
														<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Civil Protocol</dd>
														<dt className="sr-only">Role</dt>
														<dd className="text-xs text-zinc-500 dark:text-zinc-400">Founder | President</dd>
														<dt className="sr-only">Date</dt>
														<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label='2020 until 2022'>
															<time dateTime='2019'>2020</time>
															<span aria-hidden='true'> — </span>
															<time dateTime='2023'>2022</time>
														</dd>
													</dl>
												</li>

												{/* Expereince Card */}
												<li className="flex gap-4">
													<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-clip">
														<Image src='/2.jpg' alt='Job' width={36} height={36} decoding='async' className='h-10 w-10' loading='lazy'/>
													</div>
													<dl className="flex flex-auto flex-wrap gap-x-2">
														<dt className="sr-only">Company</dt>
														<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Bashful Elephant</dd>
														<dt className="sr-only">Role</dt>
														<dd className="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
														<dt className="sr-only">Date</dt>
														<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label='2020 until 2022'>
															<time dateTime='2019'>2020</time>
															<span aria-hidden='true'> — </span>
															<time dateTime='2023'>2022</time>
														</dd>
													</dl>
												</li>

												{/* Expereince Card */}
												<li className="flex gap-4">
													<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-clip">
														<Image src='/1.svg' alt='Job' width={32} height={32} decoding='async' className='h-10 w-10' loading='lazy'/>
													</div>
													<dl className="flex flex-auto flex-wrap gap-x-2">
														<dt className="sr-only">Company</dt>
														<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Civil Protocol</dd>
														<dt className="sr-only">Role</dt>
														<dd className="text-xs text-zinc-500 dark:text-zinc-400">Founder | President</dd>
														<dt className="sr-only">Date</dt>
														<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label='2020 until 2022'>
															<time dateTime='2019'>2020</time>
															<span aria-hidden='true'> — </span>
															<time dateTime='2023'>2022</time>
														</dd>
													</dl>
												</li>

												{/* Expereince Card */}
												<li className="flex gap-4">
													<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-clip">
														<Image src='/2.jpg' alt='Job' width={36} height={36} decoding='async' className='h-10 w-10' loading='lazy'/>
													</div>
													<dl className="flex flex-auto flex-wrap gap-x-2">
														<dt className="sr-only">Company</dt>
														<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Bashful Elephant</dd>
														<dt className="sr-only">Role</dt>
														<dd className="text-xs text-zinc-500 dark:text-zinc-400">CEO</dd>
														<dt className="sr-only">Date</dt>
														<dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label='2020 until 2022'>
															<time dateTime='2019'>2020</time>
															<span aria-hidden='true'> — </span>
															<time dateTime='2023'>2022</time>
														</dd>
													</dl>
												</li>
											</ol>

										{/* Download Resume Button */}
											<Link
												href='/'
												className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
											>
												Download Resume
												<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
													<path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
