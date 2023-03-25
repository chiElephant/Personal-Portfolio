import Image from "next/image"
import cliTruncate from "cli-truncate"

export default function Hero() {
  return (
    <section className="w-[80%] mx-auto mb-10 text-ice md:mt-16 md:w-4/5 bg-[url('/flatirons.png')]/ bg-cover bg-no-repeat">
      <div className="container p-4 relative">
        <div
          className="relative lg:w-4/5 font-semibold text-4xl mx-auto text-zinc-800 dark:text-zinc-100 sm:text-5xl ">
          <Image alt="" src='/logo.png' width={200} height={200} className="absolute right-0 pb-10" />
          <p className="mb-4 pt-10">I&apos;m Anthony.</p>
          <p className="mb-4">I live in Boudler, CO.</p>
          <p>I like to write code and play in the mountains.</p>
          {/* <Image alt="" src='/flatirons.png' width={3600} height={1575} className="mx-auto inset-y-10" /> */}
        </div>
      </div>
    </section >
  )
}