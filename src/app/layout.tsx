import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
	title: {
		template: '%s | Anthony Merino',
		default: 'Home | Anthony Merino'
	},
	description: `I'm Anthony Merino. I live in Boulder, CO where I write code and play in the mountains.`,
	keywords: 'Software Engineer, JavaScript, React, Next.js, Node.js, Tailwindcss, HTML',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang='en'>
			<body className='flex h-full flex-col bg-zinc-50 transition-colors duration-300 dark:bg-black'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
