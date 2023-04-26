import Image from 'next/image'

interface Props {
	image: string
}

export default function HeroImage({ image }: Props) {
	return (
		<div
			className='lg:pl-20'
			data-testid='about-content'
		>
			<div className='max-w-xs px-2.5 lg:max-w-none'>
				<Image
					src={image}
					alt='A.M'
					height={412}
					width={412}
					decoding='async'
					className='darK:bg-moon aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover'
					priority
				/>
			</div>
		</div>
	)
}
