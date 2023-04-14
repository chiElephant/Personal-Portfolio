'use client'

import Avatar from './header/Avatar'
import NavMenu from './header/NavMenu'
import DarkModeBtn from './header/DarkModeBtn'
import { useEffect, useState } from 'react'

export default function Header() {
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const header = document.getElementById('header')
			const scroll = window.scrollY

			if (header) {
				if (scroll === 0) {
					header.classList.remove('opacity-0')
					header.classList.add('opacity-100')
				}
				if (scroll > 64 && scroll > scrollTop) {
					header.classList.remove('opacity-100')
					header.classList.add('duration-500')
					header.classList.add(`opacity-0`)
				} else if (scroll > 0 && scroll < scrollTop) {
					header.classList.remove('opacity-0')
					header.classList.add('opacity-100')
				}
			}
			setScrollTop(scroll)
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<header
			id='header'
			className='pointer-events-none fixed top-0 z-50 flex w-full transform flex-col'
			data-testid='header'
		>
			<div className='top-0 z-10 mb-16 h-16 pt-6'>
				<div className='w-full sm:px-8'>
					<div className='mx-auto max-w-7xl lg:px-8'>
						<div className='relative px-4 sm:px-8 lg:px-12'>
							<div className='mx-auto max-w-2xl lg:max-w-5xl'>
								<div className='relative flex gap-4'>
									<Avatar />
									<NavMenu />
									<DarkModeBtn />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
