interface Props {
	text: string[]
}
export default function ParagraphContainer({ text }: Props): JSX.Element {
	return (
		<div className='mt-6 space-y-7 text-base text-p7 dark:text-p1'>
			{text.map((paragraph: string, i: number) => (
				<p
					key={i}
					role='paragraph'
				>
					{paragraph}
				</p>
			))}
		</div>
	)
}
