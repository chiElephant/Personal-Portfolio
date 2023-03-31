import React from 'react'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

const nunito = Nunito({
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<div className={nunito.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}
