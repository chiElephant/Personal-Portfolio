import { NextResponse } from 'next/server'
import getArticlesList from '@/lib/getArticlesList'
import { notFound } from 'next/navigation'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const length = searchParams.get('length')

	if (length) {
		const articles = await getArticlesList(parseInt(length))
		return NextResponse.json({ articles })
	}

	return notFound()
}
