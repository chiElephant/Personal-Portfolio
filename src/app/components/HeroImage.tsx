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
			<div className='flex w-fit rotate-3 rounded-2xl shadow-lg shadow-p5 drop-shadow dark:shadow-p10 '>
				<Image
					src={image}
					alt='A.M'
					height={433}
					width={433}
					decoding='async'
					className='aspect-square rounded-2xl bg-p1 dark:bg-p7'
					priority
				/>
			</div>
		</div>
	)
}
