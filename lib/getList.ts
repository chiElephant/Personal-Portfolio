import redis from '@/lib/redis'
import logger from '@/util/logger'

export default async function getList(listType: string, listLength = -1) {
	const log = logger()
	let list = null

	try {
		list = await redis.zrange(`${listType}`, 0, listLength, 'REV')
	} catch (error) {
		log.error(`Error fetching ${listType} data: `, error)
	}

	return list
}
