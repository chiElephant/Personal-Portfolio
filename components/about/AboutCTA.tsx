import Link from 'next/link'
import socialSVGPaths from '../../svg_paths/social'

interface ExternalLinks {
	[key: string]: string | undefined
}
export default function AboutCTA() {
	const platforms = ['Twitter', 'Instagram', 'GitHub', 'LinkedIn', 'email']

	const externalLinks: ExternalLinks = {
		twitter: process.env.TWITTER_LINK,
		instagram: process.env.INSTAGRAM_LINK,
		github: process.env.GITHUB_LINK,
		linkedin: process.env.LINKEDIN_LINK,
		email: process.env.EMAIL_LINK,
	}

	return (
		<div className='lg:pl-20'>
			<ul>
				{platforms.map((platform) => (
					<li
						key={platform}
						className='mt-4 flex'
					>
						<a
							href={externalLinks[platform.toLowerCase()]}
							className={
								platform === 'email'
									? 'mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
									: 'group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
							}
						>
							<svg
								key={platform}
								viewBox='0 0 24 24'
								aria-hidden='true'
								className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500'
							>
								{socialSVGPaths[platform]}
							</svg>
							<span
								className={
									platform === 'email'
										? 'group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
										: 'ml-4'
								}
							>
								{platform === 'email'
									? 'anthony.merino@me.com'
									: `Follow on ${platform}`}
							</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
