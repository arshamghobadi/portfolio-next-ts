import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {
  dataExp: WorkExperience[];
};
interface WorkExperience {
  id: number;
  title: string;
  company: string;
  start: number;
  end: number;
  url: string;
  summry: string[];
}
export default function WorkExperience({ dataExp }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {dataExp.map((item) => (
          <ExperienceCard key={item.id} dataExp={item} />
        ))}
      </div>
    </motion.div>
  );
}
