import Link from "next/link"

interface Props {
  title: string,
  blurb: string,
  date: string,
  link: string,
}

export default function PostItemCopy({ title, blurb, date, link }: Props) {
  return (
    <>
      <article className='group relative flex flex-col items-start'>
        <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
          <div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
          <Link href={link}>
            <span className='s:-inset-x-6 absolute -inset-x-4 -inset-y-6 z-20 sm:rounded-2xl'></span>
            <span className='relative z-10'>
              {title}
            </span>
          </Link>
        </h2>
        <time
          className='text-sm relative z-10 order-first mb-3 flex items-center pl-3.5 text-zinc-400 dark:text-zinc-500'
          dateTime='2023-04-01'
        >
          <span
            className='absolute inset-y-0 left-0 flex items-center'
            aria-hidden='true'
          >
            <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
          </span>
          {date}
        </time>
        <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
         {blurb}
        </p>
        <div
          aria-hidden='true'
          className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'
        >
          Read Article
          <svg className='ml-1 h-4 w-4 stroke-current'>
            <path
              d='M6.75 5.75 9.25 8l-2.5 2.25'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </div>
      </article>
    </>
  )
}