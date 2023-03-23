interface Props {
  section: String;
  content: String;
}

export default function CarouselCard({ section, content }: Props) {
  return (
    <>
      <section className="w-full mx-auto my-10 md:w-4/5 ">
        <div className="container border-4 border-buffs bg-ramble rounded-xl w-4/5 h-full flex flex-col p-4 mx-auto">
          <div className="w-full p-2 rounded bg-ice text-sm text-ramble">{content}</div>
          <a href="#" className="bg-buffs text-ramble border-2 border-buffs w-28 text-center text-lg p-2 mx-auto mt-8 rounded-full shadow-md hover:bg-neutral-300 ">{section}</a>
        </div>
      </section>
    </>
  )
}