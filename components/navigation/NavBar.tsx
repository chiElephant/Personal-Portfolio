import NavLogo from "./NavLogo"
import HamburgerBtn from "./HamburgerBtn"
import NavMenu from "./NavMenu"

export default function NavBar() {
  return (
    // Global Navigation
    <div className="fixed flex w-full h-24 z-30 border-b border-buffs bg-ramble md:h-44">
      <NavLogo />
      <HamburgerBtn />
      <NavMenu />
    </div>
  )
}