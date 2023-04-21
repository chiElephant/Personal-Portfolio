import ArticleItem from '@/components/ArticleItem'

interface Props {
	page: string
	articlesList: any
}

export default function ArticlesList({
	articlesList,
	page,
}: Props): JSX.Element {
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
