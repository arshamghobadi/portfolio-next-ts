import React from 'react';
import { motion } from 'framer-motion';

interface Data {
  id: number;
  name: string;
  progress: number;
}
interface SkillProps {
  data: Data;
  directionLeft?: boolean;
}

function Skill({ directionLeft, data }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -180 : 180, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={`/Images/${data?.id}.jpg`}
        className="rounded-full border border-gray-500 object-cover  w-11 h-11 md:w-24 md:h-24 xl:w-26 xl:h-26 filter group-hover:grayscale"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:h-26 xl:w-26 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {data.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
