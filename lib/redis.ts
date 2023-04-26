const options = {
	port: process.env.NEXT_PUBLIC_REDIS_PORT,
	host: process.env.NEXT_PUBLIC_REDIS_HOST,
	username: process.env.NEXT_PUBLIC_REDIS_USERNAME,
	password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
}

import Redis from 'ioredis'

// @ts-expect-error
const redis = new Redis(options)

export default redis
