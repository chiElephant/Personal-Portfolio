import Meta from "@/components/Meta"
import Container from "@/components/Container"
import Heading from "@/components/Heading"
import ProjectList from "@/components/ProjectList"
import { heading, paragraph, projects } from '../text/projects'

export default function Projects() {
	return (
		<>
			<Meta page='Projects' />
			<main>
				<Container>
					<Heading headingText={heading} paragraphText={paragraph}/>
					<ProjectList projects={projects}/>
				</Container>
			</main>
		</>
	)
}
