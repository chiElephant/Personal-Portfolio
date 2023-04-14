interface Props {
	headingText: string
	paragraphText: string
}
export default function HeadingContainer({
	headingText,
	paragraphText,
}: Props) {
	return (
		<header className='max-w-2xl'>
			<h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
				{headingText}
			</h1>
			<p className='mt-6 text-base font-normal text-zinc-600 dark:text-zinc-400'>
				{paragraphText}
			</p>
		</header>
	)
}
