import React from 'react'

export default function EducationIcon() {
	return (
		<svg
			viewBox=' 0 0 500 500'
			strokeWidth={32}
			strokeLinecap='round'
			strokeLinejoin='round'
			aria-hidden='true'
			className=' h-6 w-6 flex-none stroke-zinc-400  dark:stroke-zinc-500'
			xmlns='http://www.w3.org/2000/svg'
		>
			<polygon
				points='32 192 256 64 480 192 256 320 32 192'
				fill='none'
				className='fill-zinc-100 dark:fill-zinc-100/10'
			/>
			<polyline
				points='112 240 112 368 256 448 400 368 400 240'
				fill='none'
			/>
			<line
				x1='480'
				y1='368'
				x2='480'
				y2='192'
				fill='none'
			/>
			<line
				x1='256'
				y1='320'
				x2='256'
				y2='448'
				fill='none'
			/>
		</svg>
	)
}
