import MenuList from './MenuList'
import MenuBtn from './MenuBtn'

export default function NavMenu() {
	return (
		<div
			className='flex flex-1 justify-end md:justify-center'
			data-testid='nav-menu'
		>
			<MenuBtn />
			<MenuList />
		</div>
	)
}
