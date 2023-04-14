import Link from 'next/link'

interface Props {
	page: string
	activePage: string
	setActivePage: Function
}

export default function MenuItem({ page, activePage, setActivePage }: Props) {
	const handleClick = () => {
		setActivePage(page.toLowerCase())
	}

	return page.toLowerCase() === activePage ? (
		<li data-testid={`menu-list-link`}>
			<Link
				href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
				className='menuLink relative block px-3 py-2 text-teal-400 transition hover:text-teal-500 dark:hover:text-teal-300'
				onClick={handleClick}
				data-testid={page}
			>
				{page}
				<span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
			</Link>
		</li>
	) : (
		<li data-testid='menu-list-link'>
			<Link
				href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
				className='menuLink relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-300'
				onClick={handleClick}
				data-testid={page}
			>
				{page}
			</Link>
		</li>
	)
}
