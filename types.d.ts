type ArticleData =
	| {
			[x: string]: string
	  }
	| undefined

type ArticlesList = string[]

type Project = {
	name: string
	summary: string
	image: string
	icon: string
	stack: string
	linkText: string
	internalLink: string
	externalLink: string
	githubLink: string
}
