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
			<ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
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
