import Image from 'next/image'

interface Props {
	image: string
}

export default function HeroImage({ image }: Props) {
	return (
		<div
			className='max-w-xs px-2.5 lg:max-w-none lg:pl-20'
			data-testid='about-content'
		>
			<div className='flex w-fit rotate-3 rounded-2xl shadow-lg shadow-zinc-700 drop-shadow '>
				<Image
					src={image}
					alt='A.M'
					height={412}
					width={412}
					decoding='async'
					className='aspect-square rounded-2xl bg-zinc-100 dark:bg-moon'
					priority
				/>
			</div>
		</div>
	)
}
