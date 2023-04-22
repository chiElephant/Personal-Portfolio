import Image from 'next/image'

interface Props {
	projectName: string
	projectImage: string
}

export default function ProjectVideo({ projectName, projectImage }: Props) {
	return (
		<div className='mt-16 flex justify-center'>
			<Image
				alt={projectName}
				src={projectImage}
				width={400}
				height={100}
			/>
		</div>
	)
}
