export default async function getArticleData(articleId: string) {
  const res = await fetch(`http://localhost:3000/api/articleData?articleId=${articleId}`)
  return await res.json()
}