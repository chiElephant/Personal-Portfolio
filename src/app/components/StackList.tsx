import Image from 'next/image'
import StackIcon from '../icons/StackIcon'

interface Props {
	project: { [x: string]: string }
}

export default function StackList({ project }: Props) {
	const { stack } = project
	const stackItems = stack.split(', ')

	return (
		<div className='mt-10 p-6 pt-6 md:p-12'>
			<div className='rounded-2xl border border-zinc-100 p-4 pt-6 shadow-md dark:border-zinc-700/40 md:p-10'>
				<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
					<StackIcon />
					<span className='ml-3'>Tech Stack</span>
				</h2>

				{/* Stack List */}
				<div className='z-40'>
					<ol className='ml-4 mt-14 gap-4'>
						{stackItems.map((stackItem: string) => (
							<li
								key={stackItem}
								className='group mt-12 lg:mt-8'
							>
								<div className='flex flex-row rounded-xl p-2 duration-200 group-hover:scale-105 group-hover:bg-zinc-200 group-hover:shadow-md '>
									<Image
										alt={stackItem}
										src={`/stack/${stackItem.toLowerCase()}.webp`}
										width={40}
										height={40}
										className={
											'rounded-lg shadow-lg shadow-zinc-400 dark:shadow-zinc-950'
										}
									/>
									<span className='ml-6 flex items-center'>
										{`${stackItem}`}
									</span>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	)
}
