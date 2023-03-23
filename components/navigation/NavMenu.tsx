export default function NavMenu() {
  return (
    <>
      <div className="hidden tracking-widest h-48 w-full space-x-10 justify-center items-center text-lg text-ice md:flex lg:space-x-12">
        <a href="#" className="hover:text-buffs hover:border-b hover:border-buffs">
          Projects</a>
        <a href="#" className="hover:text-buffs hover:border-b hover:border-buffs">
          Skills</a>
        <a href="#" className="hover:text-buffs hover:border-b hover:border-buffs">
          Resume</a>
        <a href="#" className="hover:text-buffs hover:border-b hover:border-buffs">
          Blog</a>
        <a href="#" className="hover:text-buffs hover:border-b hover:border-buffs">
          Arcade</a>
        <a href="#" className="hover:text-buffs hover:border-b hover:border-buffs">
          Contact</a>
      </div>
    </>
  )
}