import Image from 'next/image'
import React from 'react'

interface Props {
	stack: string
}

export default function StackGrid({ stack }: Props) {
	const stackItems = stack.split(', ').slice(0, 4)

	return (
		<div className='z-40 mx-auto mt-10 flex sm:mt-12'>
			<ul className='grid grid-cols-4 gap-x-8 gap-y-8 '>
				{stackItems.map((stackItem: string) => (
					<Image
						key={stackItem}
						alt={stackItem}
						src={`/stack/${stackItem.toLowerCase()}.webp`}
						width={48}
						height={48}
						className={'rounded-lg shadow-lg shadow-p5 dark:shadow-p10'}
					/>
				))}
			</ul>
		</div>
	)
}
