import redis from './redis'
import logger from '@/util/logger'
import { cache } from 'react'

const getExperiencesList = cache(async () => {
	const client = await redis()
	const log = logger()

	let experiencesList: any[] | Promise<any[]> = []

	await client
		.zRange(`experiences`, 0, -1, { REV: true })
		.then((data) => {
			experiencesList = data
		})
		.catch((error) => {
			log.error('Error getting articles list: ', error)
		})

	client.disconnect()
	return experiencesList
})

export default getExperiencesList
