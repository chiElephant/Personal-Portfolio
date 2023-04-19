import redis from '@/lib/redis'
import logger from '@/util/logger'
import { cache } from 'react'

const getProjectData = cache(async (projectName: string) => {
	const client = await redis()
	const log = logger()

	let projectData: { [x: string]: string } = {}
	await client
		.hGetAll(`projects:${projectName}`)
		.then((data) => {
			projectData = data
		})
		.catch((error) => {
			log.error('Error getting articles list: ', error)
		})

	client.disconnect()
	return projectData
})

export default getProjectData
