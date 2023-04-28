import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Nunito } from 'next/font/google'

export const metadata: Metadata = {
	title: {
		template: '%s | Anthony Merino',
		default: 'Home | Anthony Merino',
	},
	description: `I'm Anthony Merino. I live in Boulder, CO where I write code and play in the mountains.`,
	keywords:
		'Software Engineer, JavaScript, React, Next.js, Node.js, Tailwindcss, HTML',
}

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html
			lang='en'
			className={nunito.className}
		>
			<body className='flex h-full flex-col bg-p0 transition-colors duration-300 dark:bg-p9'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
