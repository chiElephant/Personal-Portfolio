export default function NavLogo() {
  return (
    <>
      <div
        className="flex z-30 justify-center items-center h-20 w-1/2 md:h-40 md:w-4/12">
        <video
          className="h-24 md:h-44" muted autoPlay>
          <source src="neon_ramble.mp4" type="video/mp4" />
          Anthony Merino
        </video>
      </div>
    </>
  )
}