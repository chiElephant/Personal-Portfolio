import { RedisClientType, createClient } from 'redis'
import logger from '@/util/logger'

export default async function redis() {
	const log = logger()
	const client = createClient({
		username: 'default',
		password: 'R0b34t99!!',
		socket: {
			host: 'redis-11201.c8.us-east-1-4.ec2.cloud.redislabs.com',
			port: 11201,
		},
	})

	client.on('connect', () => log.info('Successfully connected to Redis'))
	client.on('error', (err) => log.error('Redis Client Error :', err))
	client.on('end', () => log.info('Successfully disconnected from Redis'))

	await client.connect()
	return client
}
