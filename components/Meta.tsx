import Head from 'next/head'

interface Props {
	page: String
}

export default function Meta({ page }: Props) {
	return (
			<Head data-testid='meta'>
				<title data-testid='meta-title'>{`${page} | Anthony Merino`}</title>
				<meta
					name='description'
					content="I'm Anthony Merino. I live in Boulder, CO where I write code and play in the mountains."
				/>
				<meta
					name='keywords'
					content='HTML, JavaScript, TypeScript, Next.js, Node.js, Tailwindcss'
				/>
				<meta
					name='author'
					content="I'm Anthony Merino. I live in Boulder, CO where I write code and play in the mountains."
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
	)
}
