export default async function getCapitalizedString(string: string) {
	return string.slice(0, 1).toUpperCase().concat(string.slice(1))
}
