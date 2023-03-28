import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Layout from '@/components/Layout'

const nunito = Nunito({
	subsets: ['latin'],
})

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<div className={nunito.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}

export default App
