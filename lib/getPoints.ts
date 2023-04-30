import redis from '@/lib/redis'
import logger from '@/util/logger'
import { cache } from 'react'

export default cache(async function getPoints(dataId: string) {
	const log = logger()
	let list = null

	try {
		list = await redis.lrange(`points:${dataId.toLowerCase()}`, 0, -1)
	} catch (error) {
		log.error(`Error fetching ${dataId} points: `, error)
	}

	return list
})
