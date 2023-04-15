import redis from '@/lib/redis'
import logger from '@/util/logger'
import { cache } from 'react'

const getArticlesList = cache(async (listLength: number) => {
	const client = await redis()
	const log = logger()

	let articlesList: any[] | Promise<any[]> = []

	await client
		.zRange('articles', 0, listLength, { REV: true })
		.then((data) => {
			articlesList = data
		})
		.catch((error) => {
			log.error('Error getting articles list: ', error)
		})

	client.disconnect()
	return articlesList
})

export default getArticlesList
