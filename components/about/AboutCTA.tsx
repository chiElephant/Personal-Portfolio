import { Url } from 'next/dist/shared/lib/router/router'
import socialSVGs from '../../svg_paths/social'
import Link from 'next/link'

interface ExternalLinks {
	[key: string]: Url
}
export default function AboutCTA() {
	const platforms = ['Twitter', 'Instagram', 'GitHub', 'LinkedIn', 'email']

	const externalLinks: ExternalLinks = {
		twitter: 'https://twitter.com/anthony_merino',
		instagram: 'https://www.instagram.com/i_am.a.m/',
		github: 'https://github.com/chiElephant',
		linkedin: 'https://www.linkedin.com/in/anthony-merino/',
		email: 'mailto:anthony.merino@me.com',
	}

	return (
		<div
			className='lg:pl-20'
			data-testid='about-cta'
		>
			<ul>
				{platforms.map((platform) => (
					<li
						key={platform}
						className={
							platform === 'email'
								? 'mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
								: 'mt-4 flex'
						}
					>
						<Link
							href={externalLinks[platform.toLowerCase()]}
							className={
								'group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
							}
							role='link'
						>
							<svg
								viewBox='0 0 24 24'
								aria-hidden='true'
								className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500'
							>
								{socialSVGs[platform]}
							</svg>
							<span className={'ml-4'}>
								{platform === 'email'
									? 'anthony.merino@me.com'
									: `Follow on ${platform}`}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
