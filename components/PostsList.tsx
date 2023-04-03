import PostItem from '@/components/PostItem'
import { blurbs } from '@/text/home'

interface Props {
  page: string
}

export default function PostsList({ page }: Props) {
  return(
    <div className='flex flex-col gap-16'>
      {blurbs.map((blurb, i) => (
        <PostItem
          key={i}
          title={blurb.title}
          blurb={blurb.blurb}
          date={blurb.date}
          link={blurb.link}
          page={page}
        />
      ))}
    </div>
  )
}