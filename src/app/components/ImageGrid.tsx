import Image from 'next/image'

export default function ImageGrid() {
	const images = [
		'/chicago-day.webp',
		'/boulder-night.webp',
		'/ai-profile-outside.webp',
		'/chicago-night.webp',
		'/boulder-day.webp',
	]

	return (
		<section className='mb-20 mt-20'>
			<div className='my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
				{images.map((image, i) => (
					<div
						key={`${image}${i}`}
						className={
							//  This conditional tilts the 2nd and 5th image counter-clockwise
							i === 1 || i === 4
								? 'bg-p dark:bg-pd relative aspect-[5/6] w-44 flex-none -rotate-2 overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl'
								: 'bg-p dark:bg-pd relative aspect-[5/6] w-44 flex-none rotate-2 overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl'
						}
					>
						<Image
							src={image}
							alt='Logo'
							width={300}
							height={360}
							decoding='async'
							priority
						/>
					</div>
				))}
			</div>
		</section>
	)
}
