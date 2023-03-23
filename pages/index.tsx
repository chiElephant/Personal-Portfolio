import Meta from '@/components/Meta';
import BioCard from '../components/BioCard'
import CarouselCard from '@/components/CarouselCard';

export default function Home() {
  const sections = ['Projects', 'Skills', 'Resume', 'Blog', 'Arcade', 'Contact']
  const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis totam deserunt. Et at necessitatibus sed ullam quidem nisi assumenda fugit optio neque quos. Facere blanditiis aspernatur tempore earum necessitatibus.'
  return (
    <>
      <Meta />
      <main className="flex flex-col w-full bg-ramble">
        <BioCard />
        {sections.map((section, index) => {
          return <CarouselCard
            key={index}
            section={section}
            content={content} />

        })}
      </main>

    </>
  );
}
