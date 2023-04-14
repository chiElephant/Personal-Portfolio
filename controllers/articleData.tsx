import redis from '@/lib/getRedis'
import logger from '@/util/logger'

export default async function getArticleDataFromRedis(request: Request) {
  const log = logger()
  const { searchParams } = new URL(request.url)
  const articleId = searchParams.get('articleId')

  if ( articleId ) {
    const client = await redis()

  let articleData;

  try {
    articleData = await client.hGetAll(`articles:${articleId}`)
  } catch (error) {
    log.error('Error retrieving article data: ', error)
  }

  // const articleData: ArticleData = await client.hGetAll(`articles:${articleId}`)
    client.quit()
    return articleData
  }
}