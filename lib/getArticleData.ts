import redis from '@/lib/getRedis'
import logger from '@/util/logger'
import { cache } from 'react'

export default cache(async function getArticleData(
	articleId: string
): Promise<ArticleData> {
	const log = logger()

	const client = await redis()
	let articleData

	try {
		articleData = await client.hGetAll(`articles:${articleId}`)
	} catch (error) {
		log.error('Error retrieving article data: ', error)
	}

	client.quit()
	return articleData
})
