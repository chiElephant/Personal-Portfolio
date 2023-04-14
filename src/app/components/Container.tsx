interface Props {
	children: React.ReactNode
}

export default function Container({ children }: Props) {
	return (
		<div className='mt-8 sm:px-8'>
			<div className='max-w-7-xl mx-auto lg:px-8'>
				<div className='relative px-4 sm:px-8 lg:px-12'>
					<div className='mx-auto max-w-2xl lg:max-w-5xl'>{children}</div>
				</div>
			</div>
		</div>
	)
}
