import Header from './Header'
import Footer from './Footer'

interface Props {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<>
			<div className='fixed inset-0 flex justify-center sm:px-8'>
				<div className='flex w-full max-w-7xl lg:px-8'>
					<div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20'></div>
				</div>
			</div>
			<div className='relative'>
				<Header />
				{children}
				<Footer />
			</div>
		</>
	)
}
