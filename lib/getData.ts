import redis from '@/lib/redis'
import logger from '@/util/logger'
import { cache } from 'react'

export default cache(async function getData(dataType: string, dataId: string) {
	const log = logger()
	let data = null

	if (
		dataType === 'professional' ||
		dataType === 'education' ||
		dataType === 'certifications'
	) {
		dataType = `experiences:${dataType}`
	}

	try {
		data = await redis.hgetall(`${dataType}:${dataId.toLowerCase()}`)
	} catch (error) {
		log.error(`Error fetching ${dataType} data: `, error)
	}

	return data
})
