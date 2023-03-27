let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
console.log('darkModeMediaQuery: ', darkModeMediaQuery)

updateMode()
darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
window.addEventListener('storage', updateModeWithoutTransitions)

function updateMode(): void {
	let isSystemDarkMode = darkModeMediaQuery.matches
	let isDarkMode =
		window.localStorage.isDarkMode === 'true' ||
		(!('isDarkMode' in window.localStorage) && isSystemDarkMode)

	if (isDarkMode) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}

	if (isDarkMode === isSystemDarkMode) {
		delete window.localStorage.isDarkMode
	}
}

function disableTransitionsTemporarily(): void {
	document.documentElement.classList.add('[&_*]:!transition-none')
	window.setTimeout(() => {
		document.documentElement.classList.remove('[&_*]:!transition-none')
	}, 0)
}

function updateModeWithoutTransitions(): void {
	disableTransitionsTemporarily()
	updateMode()
}

