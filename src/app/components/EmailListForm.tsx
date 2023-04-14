'use client'

import { ChangeEvent, useState } from 'react'
import EmailListIcon from '../icons/EmailListIcon'

export default function EmailListForm() {
	const [email, setEmail] = useState('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handleSubmit = () => {
		console.log(email)
	}

	return (
		<form
			action='/thank-you'
			className='rounded-2xl border border-zinc-100 p-6 shadow-wellShadow dark:border-zinc-700/40'
		>
			<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
				<EmailListIcon />
				<span className='ml-3'>Stay up to date</span>
			</h2>
			<p className='text-s mt-2 text-zinc-600 dark:text-zinc-400'>
				Get notified when I post something new, and unsubscribe at any time.
			</p>
			<div className='mt-6 flex'>
				<input
					type='email'
					placeholder='Email address'
					aria-label='Email addreess'
					required
					className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm'
					onChange={(e) => handleChange(e)}
				/>
				<button
					className='ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
					onClick={handleSubmit}
				>
					Join
				</button>
			</div>
		</form>
	)
}
