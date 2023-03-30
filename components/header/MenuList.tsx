import { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'

export default function MenuList() {
	const router = useRouter()

	const [activeLink, setActiveLink] = useState('')

	const links = ['About', 'Projects', 'Resume', 'Stack', 'Articles']

	useEffect(() => {
		if (router) {
			const page = router.pathname.split('/')[1]
			setActiveLink(page)
		}
	}, [router])

	return (
		<div
			className='pointer-events-auto hidden md:block'
			data-testid='menu-list'
		>
			<ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
				{links.map((link) => (
					<MenuItem
						key={link}
						link={link}
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
				))}
			</ul>
		</div>
	)
}
