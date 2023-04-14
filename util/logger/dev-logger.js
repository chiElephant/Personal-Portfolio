const { format, createLogger, transports } = require('winston')
const { timestamp, combine, printf, errors, json, colorize } = format

function buildDevLogger() {
	const logFormat = printf(({ level, message, timestamp, stack }) => {
		return `${timestamp} ${level}: ${stack || message}`
	})

	return createLogger({
		transports: [
			new transports.File({
				level: 'silly',
				filename: '__logs__/developmentLog.log',
				format: combine(
					timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
					errors({ stack: true }),
					json(),
					logFormat
				),
			}),
		],
	})
}

module.exports = buildDevLogger
