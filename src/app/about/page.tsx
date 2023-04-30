import Container from '@/components/Container'
import SocialList from '@/components/SocialList'
import HeroImage from '@/components/HeroImage'
import Heading from '@/components/HeadingContainer'
import ParagraphContainer from '@/components/ParagraphContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About',
}

export default function About(): JSX.Element {
	const content = (
		<main className='md:mt-42 mt-36'>
			<Container>
				<div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
					<HeroImage image={'/ai-profile-desk.png'} />

					<section className='lg:order-first lg:row-span-2'>
						{/* @ts-expect-error Async Server Component Workaround */}
						<Heading
							headingText={`Hey there! My name is Anthony, and it's a pleasure to meet you.`}
							paragraphText={`I live in Boulder, CO. I like to write code and play in the mountains. Let me tell you a bit about my journey so far.`}
							dataType={null}
							dataId={null}
						/>

						<ParagraphContainer
							text={[
								`I had the pleasure of attending the University of Colorado, where I delved deep into the world of Business Management with a focus on strategy and entrepreneurship. This experience transformed me in countless ways, igniting my entrepreneurial spirit and honing my leadership skills. My education also helped me develop my emotional intelligence, which has been a crucial asset in all areas of my life.`,

								`I started my career in the fast-paced world of hospitality management, where I developed a knack for business operations, a passion for delivering unforgettable customer experiences, and a drive to always exceed expectations. From managing fine dining restaurants to running procurement for a data security and electronics recycling company, I've worn many hats!  Along the way, I've gained valuable skills and experiences that have equipped me to tackle new challenges with confidence and creativity. But my love for technology has always been a constant in my life, starting from when I was just a curious kid tinkering with computers. I am filled with a sense of excitement and enthusiasm to have pursued my passion for software engineering, as it offers me the opportunity to utilize my skills and qualities in innovative and impactful ways.`,

								`After college, I launched into the fast-paced world of hospitality management, where I developed a knack for business operations, a passion for delivering unforgettable customer experiences, and a drive to always exceed expectations. From managing fine dining restaurants to overseeing procurement for a data security, electronics recycling company, I've worn many hats! Each experience has equipped me with valuable skills and a fearless approach to tackling new challenges. But my love for technology has always been a constant in my life. From my early days tinkering with computers to my current career as a software engineer, I'm thrilled to have found a field that allows me to combine my passion for technology with my business acumen.`,

								`I've had the pleasure of collaborating on some exciting ventures. For example, MyHealthCoach, a fully responsive health and fitness application, helped users track their strength and weightlifting workouts as well as their diet. I also worked on Attelier, an e-commerce application providing the top trends in men's and women's fashion. And I founded Civil Protocol, a web3 platform that assisted family-owned and operated businesses in developing nations secure crowd-sourced microloans to help them grow and expand their business. Our subsidiary, Bashful Elephant, created 'People Not Punks', an Ethereum blockchain NFT collection featuring 500 unique individuals with a trait of one of 40 neutral or inclusive gender pronouns recognized by the LGBTQ+ community.`,

								`Outside of work, I'm passionate about making a positive impact in my community. That's why I'm developing a non-profit after-school and weekend coding program for children in low-income communities. I believe that by helping these kids build confidence, fuel inspiration, and support their creativity, we can empower the next generation of innovators and changemakers.`,

								`When I'm not busy coding or giving back to my community, you can catch me living my best life outdoors! I'm a total sports fanatic, whether it's diving into the deep end of the pool, racing down a hill on my bike, or pounding the pavement on a long run. As a proud Chicago native and sports fan, I'm always up for cheering on my favorite teams and getting involved in the local sports scene. And let's not forget about my Ironman triathlon finish – if there's a challenge to conquer, you better believe I'm up for it!`,

								`As much as I love a good sweat sesh, I also know the value of taking a breather and getting some fresh air. That's why you'll often find me exploring the great outdoors, hiking and camping in the Rocky Mountains, or taking my trusty little boat out on the water for some sun and relaxation. And when I'm feeling extra ambitious, I'll even cast a line and try my luck at trout fishing.`,

								`But that's not all - I'm also a bit of a wine enthusiast! I have an introductory-level sommelier certification and love to explore new vintages and wine regions. And when I'm not enjoying a glass of wine or hitting the trails, you can catch me brushing up on the latest developments in software development, Web3, machine learning, AI. I believe that constant growth and learning are crucial to success, and I'm always seeking out new ways to challenge myself and expand my knowledge.`,

								`I'm so grateful for the experiences that have led me to where I am today, and I can't wait to see where this journey takes me next. I'm always up for a challenge, and I believe that my mindset of constant growth and learning will serve me well in the ever-evolving world of software engineering. By combining my skills, passion, and creativity, I can help build the future of technology and make a positive impact in the world around me. Thanks for taking the time to get to know me, and I can't wait to connect with you soon!`,
							]}
						/>
					</section>
					<section className='lg:pl-20'>
						<ul>
							<SocialList style={'rows'} />
						</ul>
					</section>
				</div>
			</Container>
		</main>
	)

	return content
}
