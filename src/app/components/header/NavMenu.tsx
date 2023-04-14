import MenuList from './MenuList'
import MobileMenuBtn from './MobileMenuBtn'

export default function NavMenu() {
	return (
		<div
			className='flex flex-1 justify-end md:justify-center'
			data-testid='nav-menu'
		>
			<MobileMenuBtn />
			<MenuList />
		</div>
	)
}
