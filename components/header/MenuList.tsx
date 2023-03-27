import { useState } from 'react'
import MenuItem from './MenuItem'

export default function MenuList() {
	const sections = ['About', 'Projects', 'Resume', 'Stack', 'Blog']

	const [activeLink, setActiveLink] = useState('about')

	return (
		<div className='pointer-events-auto hidden md:block'>
			<ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
				{sections.map((section) => (
					<MenuItem
						key={section}
						section={section}
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
				))}
			</ul>
		</div>
	)
}
