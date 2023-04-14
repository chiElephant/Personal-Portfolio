export default async function getArticlesList(listLength: number) {
  const res = await fetch(`http://localhost:3000/api/articlesList?listlength=${listLength}`)
  return await res.json()
}
