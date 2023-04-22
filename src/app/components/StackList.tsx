import Image from 'next/image'
import CertificationIcon from '../icons/CertificationIcon'
import getProjectData from '@/lib/getProjectsData'

interface Props {
	stackList: string
}

export default function StackList({ stackList }: Props) {
	const stackItems = stackList.split(', ').sort()

	return (
		<div className='mt-10 rounded-2xl border border-zinc-100 p-4 pt-6 shadow-md dark:border-zinc-700/40 md:p-10'>
			{/* Experience List Heading and Icon */}
			<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
				<CertificationIcon />
				<span className='ml-3'>Project Stack</span>
			</h2>

			{/* Stack List */}
			<div className='z-40'>
				<ol className='ml-4 gap-4'>
					{stackItems.map((stackItem: string) => (
						<li
							key={stackItem}
							className='mt-12 flex flex-row lg:mt-8'
						>
							<Image
								alt={stackItem}
								src={`/stack/${stackItem}.webp`}
								width={32}
								height={32}
								className={'rounded-lg'}
							/>
							<span className='ml-8'>{`${stackItem}`.toUpperCase()}</span>
						</li>
					))}
				</ol>
			</div>
		</div>
	)
}
