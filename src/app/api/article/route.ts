import { NextResponse, NextRequest } from 'next/server'
import getData from '@/lib/getData'

export async function GET(request: NextRequest) {
	const { searchParams } = request.nextUrl
	const id = searchParams.get('id')

	if (!id) {
		return NextResponse.error()
	}

	try {
		const article = await getData('articles', id)
		return NextResponse.json(article)
	} catch (error) {
		return NextResponse.error()
	}
}
