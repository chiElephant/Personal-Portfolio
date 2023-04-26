import { NextResponse } from 'next/server'
import getList from '@/lib/getList'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const length = searchParams.get('length')

	if (!length) {
		return NextResponse.error()
	}

	try {
		const articles = await getList('articles', parseInt(length))
		return NextResponse.json(articles)
	} catch (error) {
		return NextResponse.error()
	}
}
