import { createClient } from 'redis'
import logger from '@/util/logger'

const log = logger()

const redisOptions: any = {
	username: process.env.NEXT_PUBLIC_REDIS_USERNAME,
	password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
	socket: {
		host: process.env.NEXT_PUBLIC_REDIS_HOST,
		port: process.env.NEXT_PUBLIC_REDIS_PORT,
	},
}

export default async function redis() {
	const client = createClient(redisOptions)

	client.on('connect', () => log.info('Successfully connected to Redis'))
	client.on('error', (err) => log.error('Redis Client Error :', err))
	client.on('end', () => log.info('Successfully disconnected from Redis'))

	await client.connect()
	return client
}
