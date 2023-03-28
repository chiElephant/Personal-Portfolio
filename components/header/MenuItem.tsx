import Link from 'next/link'

interface Props {
	platform: string
	activeLink: string
	setActiveLink: Function
}

export default function MenuItem({
	platform,
	activeLink,
	setActiveLink,
}: Props) {
	return platform.toLowerCase() === activeLink ? (
		<li>
			<Link
				href={`/${platform.toLowerCase()}`}
				className='menuLink relative block px-3 py-2 text-teal-400 transition hover:text-teal-500 dark:hover:text-teal-400'
				onClick={() => {
					setActiveLink(platform.toLowerCase())
				}}
			>
				{platform}
				<span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
			</Link>
		</li>
	) : (
		<li>
			<Link
				href={`/${platform.toLowerCase()}`}
				className='menuLink relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'
				onClick={() => {
					setActiveLink(platform.toLowerCase())
				}}
			>
				{platform}
			</Link>
		</li>
	)
}
