import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
// type Props = {};
interface Data {
  id: number;
  name: string;
  progress: number;
}
interface Props {
  data: Data[];
}

function Skills({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {data.map((item) => (
          <Skill key={item.id} data={item} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
