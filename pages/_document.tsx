import { Html, Head, Main, NextScript } from 'next/document'
import { HtmlHTMLAttributes } from 'react'

interface DocumentProps {
	htmlProps: HtmlHTMLAttributes<HTMLHtmlElement>
}

/**
 * Document component is used to modify the initial HTML and body tags rendered on the server.
 * It is only rendered on the server-side, and not on the client-side.
 */
export default function Document({ htmlProps }: DocumentProps): JSX.Element {
	return (
		<Html
			{...htmlProps}
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
