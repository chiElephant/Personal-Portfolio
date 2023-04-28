'use client'
import { useEffect, useState } from 'react'
import LightModeIcon from '@/app/icons/LightModeIcon'
import DarkModeIcon from '@/app/icons/DarkModeIcon'

export default function DarkModeBtn() {
	const [isLocalDarkMode, setIsLocalDarkMode] = useState<string | undefined>(
		undefined
	)
	const [isSystemDarkMode, setIsSystemDarkMode] = useState<string>('')

	useEffect(() => {
		setIsLocalDarkMode(window.localStorage.isDarkMode)

		setIsSystemDarkMode(() =>
			window.matchMedia('(prefers-color-scheme: dark)').matches.toString()
		)

		if (
			isLocalDarkMode === 'true' ||
			(isLocalDarkMode === undefined && isSystemDarkMode === 'true')
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isLocalDarkMode, isSystemDarkMode])

	function handleDarkMode() {
		const isLocalDarkMode = window.localStorage.getItem('isDarkMode')
		const isSystemDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		if (isLocalDarkMode === 'true') {
			window.localStorage.setItem('isDarkMode', 'false')
			setIsLocalDarkMode('false')
		} else if (isLocalDarkMode === 'false') {
			window.localStorage.setItem('isDarkMode', 'true')
			setIsLocalDarkMode('true')
		} else {
			window.localStorage.setItem('isDarkMode', `${!isSystemDarkMode}`)
			setIsLocalDarkMode(`${!isSystemDarkMode}`)
		}
	}

	return (
		<div
			className='flex justify-end md:flex-1'
			data-testid='dark-mode-btn'
		>
			<div className='pointer-events-auto'>
				<button
					type='button'
					aria-label='Toggle dark mode'
					className='group rounded-full bg-p0/90 px-3 py-2 shadow-lg shadow-p8/5 ring-1 ring-p8/5 backdrop-blur transition dark:bg-p8/90 dark:ring-p0/10 dark:hover:ring-p0/20'
					onClick={() => handleDarkMode()}
				>
					<LightModeIcon />
					<DarkModeIcon />
				</button>
			</div>
		</div>
	)
}
