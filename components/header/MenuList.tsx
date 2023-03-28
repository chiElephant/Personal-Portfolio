import { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'

export default function MenuList() {
	const platforms = ['About', 'Projects', 'Resume', 'Stack', 'Articles']

	const router = useRouter()
	const { pathname } = router

	const [activeLink, setActiveLink] = useState('')

	useEffect(() => {
		const page = pathname.split('/')[1]

		setActiveLink(page)
	}, [pathname])

	return (
		<div className='pointer-events-auto hidden md:block'>
			<ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
				{platforms.map((platform) => (
					<MenuItem
						key={platform}
						platform={platform}
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
				))}
			</ul>
		</div>
	)
}
