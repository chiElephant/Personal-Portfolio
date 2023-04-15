import redis from '@/lib/redis'
import logger from '@/util/logger'
import { cache } from 'react'

const getArticleData = cache(async(articleId: string) => {
	const client = await redis()
	const log = logger()

	let articleData: { [x: string]: string } = {}
	await client.hGetAll(`articles:${articleId}`)
	.then(data => {
		articleData = data
	})
	.catch(error => {
		log.error('Error getting articles list: ', error)
	})

	client.disconnect()
	return articleData
})

export default getArticleData

