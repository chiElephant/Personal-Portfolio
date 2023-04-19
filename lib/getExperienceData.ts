import redis from '@/lib/redis'
import logger from '@/util/logger'
import { cache } from 'react'

const getExperienceData = cache(
	async (experienceType: string, experienceName: string) => {
		const client = await redis()
		const log = logger()

		let experienceData: { [x: string]: string } = {}
		await client
			.hGetAll(`experiences:${experienceType}:${experienceName}`)
			.then((data) => {
				experienceData = data
			})
			.catch((error) => {
				log.error('Error getting articles list: ', error)
			})

		client.disconnect()
		return experienceData
	}
)

export default getExperienceData
