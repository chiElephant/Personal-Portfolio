import redis from '@/lib/getRedis'

export default async function getArticlesListFromRedis(request: Request) {
  const { searchParams } = new URL(request.url)
  const listLength =  searchParams.get('listlength')

  if ( listLength !== null ) {
    const client = await redis()
    const articlesList = await client.zRange('articles', 0, parseInt(listLength), {
      REV: true,
    })

    client.disconnect()
    return articlesList
  }
}