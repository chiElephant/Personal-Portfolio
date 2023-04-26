import { NextResponse } from 'next/server'
import getList from '@/lib/getList'

export async function GET() {
	try {
		const projects = await getList('projects')
		return NextResponse.json(projects)
	} catch (error) {
		return NextResponse.error()
	}
}
