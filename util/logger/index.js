const buildDevLogger = require('./dev-logger')
const buildProdLogger = require('./prod-logger')

export default function logger() {
	if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
		return buildDevLogger()
	} else {
		return buildProdLogger()
	}
}
