import Head from 'next/head';
import { HiArrowUpCircle } from 'react-icons/hi2';
import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactME from '@/components/ContactME';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

interface Data {
  id: number;
  name: string;
  progress: number;
}
interface Props {
  data: Data[];
}

export default function Home({ data }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Arsham ghobadi portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="About" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills data={data} />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactME />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HiArrowUpCircle className=" w-12 h-12  rounded-full" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/data');
  const data: Data[] = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 60 * 60,
  };
};
