import React from 'react'
import type { AppInitialProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

export interface AppOptions {
	Component: React.ElementType
	pageProps: AppInitialProps
}

const nunito = Nunito({
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppOptions): JSX.Element {
	return (
		<div className={nunito.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}
