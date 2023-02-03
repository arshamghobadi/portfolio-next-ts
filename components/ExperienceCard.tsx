import React from 'react';

import { motion } from 'framer-motion';
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md::w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/WhatsApp Image 2022-09-09 at 10.24.57.jpeg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">title</h4>
        <p className="font-bold text-2xl mt-1">company name</p>
        {/* <div>{tecnalogi}</div> */}
      </div>
      <p className="uppercase space-y-4 ml-5 text-lg">
        started work ..... - end .....
      </p>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>summery points</li>
        <li>summery points</li>
        <li>summery points</li>
        <li>summery points</li>
        <li>summery points</li>
      </ul>
    </article>
  );
}
