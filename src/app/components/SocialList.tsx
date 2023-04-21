import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import TwitterIcon from '../icons/TwitterIcon'
import InstagramIcon from '../icons/InstagramIcon'
import GitHubIcon from '../icons/GitHubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import EmailIcon from '../icons/EmailIcon'

interface Props {
	style: string
}
interface ExternalLinks {
	[key: string]: Url
}

export default function SocilaLList({ style }: Props) {
	const platforms = ['Twitter', 'Instagram', 'GitHub', 'LinkedIn', 'email']
	const externalLinks: ExternalLinks = {
		twitter: 'https://twitter.com/anthony_merino',
		instagram: 'https://www.instagram.com/i_am.a.m/',
		github: 'https://github.com/chiElephant',
		linkedin: 'https://www.linkedin.com/in/anthony-merino/',
		email: 'mailto:anthony.merino@me.com',
	}

	return (
		<>
			{platforms.map((platform) => (
				<li
					key={platform}
					className={
						platform === 'email' && style === 'rows'
							? 'mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
							: 'mt-4 flex'
					}
				>
					<Link
						href={externalLinks[platform.toLowerCase()]}
						className={`aria-hidden group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500`}
						// role='link'
					>
						{platform === 'Twitter' ? <TwitterIcon /> : ''}
						{platform === 'Instagram' ? <InstagramIcon /> : ''}
						{platform === 'GitHub' ? <GitHubIcon /> : ''}
						{platform === 'LinkedIn' ? <LinkedInIcon /> : ''}
						{platform === 'email' ? <EmailIcon /> : ''}
						{style === 'rows' ? (
							<span className={'ml-4'}>
								{platform === 'email'
									? 'anthony.merino@me.com'
									: `Follow on ${platform}`}
							</span>
						) : (
							''
						)}
					</Link>
				</li>
			))}
		</>
	)
}
