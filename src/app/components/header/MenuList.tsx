import { useState } from 'react'
import MenuItem from './MenuItem'

export default function MenuList() {
	const [activePage, setActivePage] = useState('home')

	const pages = ['Home', 'About', 'Projects', 'Experiences', 'Articles']

	return (
		<div
			className='pointer-events-auto hidden md:block'
			data-testid='menu-list'
		>
			<ul className='flex rounded-full bg-p0/90 px-3 text-sm font-medium text-p5 shadow-lg shadow-p8/5 ring-1 ring-p9/5 backdrop-blur dark:bg-p8/90 dark:text-p3 dark:ring-p0/10'>
				{pages.map((page) => (
					<MenuItem
						key={page}
						page={page}
						activePage={activePage}
						setActivePage={setActivePage}
					/>
				))}
			</ul>
		</div>
	)
}
