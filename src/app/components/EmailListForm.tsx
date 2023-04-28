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
			className='rounded-2xl border border-p2 p-6 shadow-wellShadow dark:border-p10'
		>
			<h2 className='flex text-sm font-semibold text-p8 dark:text-p1'>
				<EmailListIcon />
				<span className='ml-3'>Stay up to date</span>
			</h2>
			<p className='mt-2 text-sm text-p5 dark:text-p4'>
				Get notified when I post something new, and unsubscribe at any time.
			</p>
			<div className='mt-6 flex'>
				<input
					type='email'
					placeholder='Email address'
					aria-label='Email addreess'
					required
					className='min-w-0 flex-auto appearance-none rounded-md border border-p9/10 bg-p0 px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-p8/5 placeholder:text-p4 focus:border-s5 focus:outline-none focus:ring-4 focus:ring-s5/10 dark:border-p7 dark:bg-p7/[0.15] dark:text-p2 dark:placeholder:text-p5 dark:focus:border-s4 dark:focus:ring-s4/10 sm:text-sm'
					onChange={(e) => handleChange(e)}
				/>
				<button
					className='ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-p8 px-3 py-2 text-sm font-semibold text-p1 outline-offset-2 transition hover:bg-p7 active:bg-p8 active:text-p1/70 active:transition-none dark:bg-p7 dark:hover:bg-p6 dark:active:bg-p7 dark:active:text-p1/70'
					onClick={handleSubmit}
				>
					Join
				</button>
			</div>
		</form>
	)
}
