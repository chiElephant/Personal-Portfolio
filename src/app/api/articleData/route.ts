import getArticleDataFromRedis from "@/controllers/articleData"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const articleData = await getArticleDataFromRedis(request)

  return NextResponse.json({articleData})
}