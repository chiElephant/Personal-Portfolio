import Image from "next/image"
import cliTruncate from "cli-truncate"

export default function BioCard() {
  return (
    <section className="w-full mx-auto mt-44 mb-10 text-ice md:mt-60 md:w-4/5">
      <div className="container flex flex-wrap px-4 h-full relative mx-auto">
        <Image
          className="border border-buffs shadow shadow-ice max-h-32 md:max-h-full md:border-2 rounded-xl md:my-auto"
          src="/profile.JPG"
          alt="Anthony Merino"
          height="100"
          width="100" />
        <div className="max-w-44"></div>
        <p
          className="flex-1 text-sm font-thin tracking-wider text-left pl-4 md:text-lg md:text-left md:m-6 md:p-10 lg:p-10 lg:m-16">
          {cliTruncate('As a full-stack software engineer, I am passionate about using my proven critical thinking skills, problem-solving aptitude, and sound decision-making abilities to deliver exceptional results. Collaboration and accountability are my top priorities, and I approach every project with a result-oriented mindset, utilizing my operational knowledge and reasoning abilities. I pride myself on my adaptability and sense of priority, which allow me to navigate complex challenges efficiently and effectively. My technical expertise is extensive, encompassing both front-end and back-end technologies, as well as testing/deployment tools and developer tools. I am well-versed in agile methodologies and have a strong familiarity with a range of relevant practices and tools.', 200, { preferTruncationOnSpace: true })}
        </p>
      </div>
    </section >
  )
}