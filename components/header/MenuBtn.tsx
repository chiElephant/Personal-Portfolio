import { menuBtnSVG } from '@/svg_paths/menu_btn'

interface MenuBtnProps {
	onClick?: () => void
}

export default function MenuBtn({ onClick }: MenuBtnProps) {
	return (
		<div
			className='pointer-events-auto md:hidden'
			data-testid='menu-btn'
		>
			<button
				className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-teal-200 dark:ring-white/10 dark:hover:ring-white/20'
				type='button'
				aria-expanded='false'
				onClick={onClick}
			>
				Menu
				{menuBtnSVG}
			</button>
		</div>
	)
}
