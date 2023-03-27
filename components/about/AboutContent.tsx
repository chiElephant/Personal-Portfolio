import Image from 'next/image'
import paragraphs from '../../text/about'

export default function AboutContent() {
	return (
		<>
			<div className='lg:pl-20'>
				<div className='max-w-xs px-2.5 lg:max-w-none'>
					<Image
						src='/new.png'
						alt='A.M'
						height={200}
						width={200}
						decoding='async'
						loading='lazy'
						className='darK:bg-moon aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover'
					/>
				</div>
			</div>
			{/* About Heading and Paragraphs */}
			<div className='lg:order-first lg:row-span-2'>
				<h1 className='text-4xl font-semibold tracking-tight text-moon dark:text-zinc-100 sm:text-5xl'>
					{paragraphs.heading}
				</h1>
				<div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
					<p>{paragraphs.one}</p>

					<p>{paragraphs.two}</p>

					<p>{paragraphs.three}</p>

					<p>{paragraphs.four}</p>
				</div>
			</div>
		</>
	)
}
