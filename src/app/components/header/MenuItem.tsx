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
				className='menuLink relative block px-3 py-2 text-s6 transition dark:text-s3'
				onClick={handleClick}
				data-testid={page}
			>
				{page}
				<span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-s5/40 to-s5/0 dark:from-s4/0 dark:via-s4/40 dark:to-s4/0' />
			</Link>
		</li>
	) : (
		<li data-testid='menu-list-link'>
			<Link
				href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
				className='menuLink relative block px-3 py-2 transition hover:text-s6 dark:hover:text-s4'
				onClick={handleClick}
				data-testid={page}
			>
				{page}
			</Link>
		</li>
	)
}
