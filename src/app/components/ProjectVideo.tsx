import Image from 'next/image'

interface Props {
	project: { [x: string]: string }
}

export default function ProjectVideo({ project }: Props) {
	const { name, image } = project

	return (
		<div className='mt-24 flex justify-center'>
			<Image
				alt={name}
				src={image}
				width={400}
				height={100}
			/>
		</div>
	)
}
