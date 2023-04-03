import { Url } from 'next/dist/shared/lib/router/router'
import Link from "next/link"
import socialSVGs from '@/svg_paths/social'


interface ExternalLinks {
	[key: string]: Url
}

export default function SocilaLinksCard() {

  const platforms = ['Twitter', 'Instagram', 'GitHub', 'LinkedIn']
	const externalLinks: ExternalLinks = {
		twitter: 'https://twitter.com/anthony_merino',
		instagram: 'https://www.instagram.com/i_am.a.m/',
		github: 'https://github.com/chiElephant',
		linkedin: 'https://www.linkedin.com/in/anthony-merino/',
	}

  return(
    <>
      <ul className='mt-6 flex gap-6'>
        {platforms.map((platform) => (
          <li
            key={platform}
            className={'mt-4 flex'}
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
                {socialSVGs[platform.toLowerCase()]}
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}