import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
interface WorkExperience {
  id: number;
  title: string;
  company: string;
  start: number;
  end: number;
  url: string;
  summry: string[];
}

type Props = {
  dataExp: WorkExperience;
};

export default function ExperienceCard({ dataExp }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md::w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={`/image-exp/${dataExp.id}.jpg`}
        alt={dataExp.company}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{dataExp.title}</h4>
        <p className="font-bold text-xl mt-1">{dataExp.company}</p>
      </div>
      <p className="uppercase space-y-4 ml-5 text-lg">
        started work {dataExp.start} - ended at {dataExp.end}
      </p>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        {dataExp.summry.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <Link className=" text-[#F7AB0A]" href={dataExp.url}>
        Website
      </Link>
    </article>
  );
}
