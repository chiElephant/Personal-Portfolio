import { NextResponse } from "next/server"
import getArticlesListFromRedis from "@/controllers/articlesList"

export async function GET(request: Request) {
  const articlesList = await getArticlesListFromRedis(request)

  return NextResponse.json({articlesList})
}