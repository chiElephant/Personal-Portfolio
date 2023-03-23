export default function HamburgerBtn() {

  function toggleMenu() {
    const btn = document.getElementById('menu-btn')
    return btn ? btn.classList.toggle('open') : ''
  }

  return (
    <>
      <div
        className="flex h-24 w-1/2 justify-center items-center md:hidden">
        <button
          id="menu-btn"
          className="hamburger z-30 mt-4 md:hidden"
          onClick={toggleMenu}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </>
  )
}