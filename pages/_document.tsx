import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html
			className='h-full antialiased'
			lang='en'
		>
			<Head />
			<body className='flex h-full flex-col bg-zinc-50 dark:bg-black'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
