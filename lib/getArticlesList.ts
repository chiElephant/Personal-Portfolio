import redis from '@/lib/getRedis'
import logger from '@/util/logger'
import { cache } from 'react'

export default cache(async function getArticlesList(listLength: number) {
	const log = logger()
	const client = await redis()
	let articlesList

	try {
		articlesList = await client.zRange('articles', 0, listLength, { REV: true })
	} catch (error) {
		log.error('Error retrieving articles list: ', error)
	}

	client.disconnect()
	return articlesList
})
