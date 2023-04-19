import redis from './redis'
import logger from '@/util/logger'
import { cache } from 'react'

const getProjectsList = cache(async () => {
	const client = await redis()
	const log = logger()

	let projectsList: any[] | Promise<any[]> = []

	await client
		.zRange('projects', 0, -1, { REV: true })
		.then((data) => {
			projectsList = data
		})
		.catch((error) => {
			log.error('Error getting articles list: ', error)
		})

	client.disconnect()
	return projectsList
})

export default getProjectsList
