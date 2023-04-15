import ArticleItem from '@/app/articles/components/ArticleItem'

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
			{articlesList.map((articleName: string) => (
				<ArticleItem
					key={articleName}
					articleName={articleName}
					page={page}
				/>
			))}
		</div>
	)

	return content
}
