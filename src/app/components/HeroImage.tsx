import getData from '@/lib/getData'
import Image from 'next/image'

interface Props {
	dataType: string | null
	dataId: string | null
	style: string
	image: string | null
}

export default async function HeroImage({
	dataType,
	dataId,
	style,
	image = null,
}: Props) {
	if (dataType !== null && dataId !== null) {
		const data = await getData(dataType, dataId)

		if (data !== null) {
			image = data.image
		}
	}

	if (image === null) {
		return <></>
	}

	const content = (
		<div
			className='flex justify-center'
			data-testid='about-content'
		>
			{/* <div className='flex w-fit rotate-3 rounded-2xl shadow-lg shadow-p5 drop-shadow dark:shadow-p10 '> */}
			<Image
				src={image}
				alt='A.M'
				height={400}
				width={360}
				quality={100}
				decoding='async'
				className={style}
				// 'rotate-3 rounded-2xl drop-shadow-2xl'
				priority
			/>
			{/* </div> */}
		</div>
	)

	return content
}
