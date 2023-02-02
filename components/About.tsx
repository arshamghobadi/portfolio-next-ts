import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        about
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="/WhatsApp Image 2022-09-09 at 10.24.57.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-80 md:h-95 xl:h-[420px]"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl fort-semibold">
          here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore
          incidunt iusto eaque recusandae, obcaecati, magnam quae temporibus
          molestias repudiandae fuga nihil. Illo, distinctio alias velit
          reprehenderit quaerat a nemo.
        </p>
      </div>
    </motion.div>
  );
}
