import Image from "next/image"

export default function ImageGrid() {
  const images = ['/c.png', '/fi.png', '/c.png', '/fi.png', '/c.png']

  return(
  <section className='mt-16 sm:mt-20'>
    <div className='my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
      {images.map((image, i) => (
        <div
          key={`${image}${i}`}
          className={
            i === 1 || i === 4
              ? 'relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
              : 'relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
          }
        >
          <Image
            src={image}
            alt='LOGO'
            width={2400}
            height={3000}
          />
        </div>
      ))}
    </div>
  </section>
  )
}