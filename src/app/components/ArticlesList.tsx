import ArticleItem from '@/components/ArticleItem'
import Search from './Search'
import getList from '@/lib/getList'

interface Props {
	page: string
	length: any
}

export default async function ArticlesList({ length, page }: Props) {
	const articlesList = await getList('articles', length)

	if (articlesList === null) {
		return <></>
	}

	const content = (
		<div className='flex flex-col gap-16'>
			{articlesList.map((articleId: string) => (
				/* @ts-expect-error Server Component */
				<ArticleItem
					key={articleId}
					articleId={articleId}
					page={page}
				/>
			))}
		</div>
	)

	return content
}
