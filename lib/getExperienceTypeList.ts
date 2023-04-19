import redis from './redis'
import logger from '@/util/logger'
import { cache } from 'react'

const getExperienceTypeList = cache(async (experienceType: string) => {
	const client = await redis()
	const log = logger()

	let experienceList: any[] | Promise<any[]> = []

	await client
		.zRange(`experiences:${experienceType}`, 0, -1, { REV: true })
		.then((data) => {
			experienceList = data
		})
		.catch((error) => {
			log.error('Error getting articles list: ', error)
		})

	client.disconnect()
	return experienceList
})

export default getExperienceTypeList
