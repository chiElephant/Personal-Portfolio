import { useState } from 'react'
import MobileMenu from './MobileMenu'
import DownArrowIcon from '@/app/icons/DownArrowIcon'

export default function MobileMenuBtn() {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(true)
	}

	return (
		<div
			className='pointer-events-auto md:hidden'
			data-testid='menu-btn'
		>
			<button
				className='group flex items-center rounded-full bg-p0/90 px-4 py-2 text-sm font-medium text-s7 shadow-lg shadow-s8/5 ring-1 ring-p9/5 backdrop-blur dark:bg-p9/90 dark:text-s3 dark:ring-p0/10 dark:hover:ring-p0/20'
				type='button'
				aria-expanded='false'
				onClick={handleClick}
			>
				Menu
				<DownArrowIcon />
			</button>
			<MobileMenu
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</div>
	)
}
