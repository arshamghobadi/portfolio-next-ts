import React from 'react';
import { motion } from 'framer-motion';
import { once } from 'events';
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" invisible sm:visible absolute top-20  uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/photo1582649363.jpeg"
        className=" mt-14 md:mb-0 md:mt-14 flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-full  object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[500px] xl:h-[400px]  xl:mt-20"
      />
      <div className="space-y-8 px-0 md:px-10 ">
        <h4 className="text-3xl fort-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm">
          Hi,I&apos;m Arsham Ghobadi, a software engineer and front-end web
          developer.I have a passion for creating beautiful, intuitive, and
          functional websites and applications that meet the needs of both users
          and businesses. with 2 years of experience in the field, I have honed
          my skills in many technologies(u can find them in skill page). I have
          a strong background in software engineering, having received my
          Associate&apos;s degree in Computer Science from University of Applied
          Science and Technology in Iran and Google Digital Garage and Hubspot
          Academy. I have had the opportunity to work on a variety of projects,
          from developing and maintaining e-commerce websites to creating
          interactive applications for clients in various industries. My
          experience has given me a solid understanding of the software
          development lifecycle, and I am comfortable working both independently
          and as part of a team. In my free time, I enjoy staying up-to-date
          with the latest advancements in technology, particularly in the
          front-end web development space. I am always eager to learn new things
          and continuously improve my skills. I also enjoy playing video
          games,read books and play with my daughter
        </p>
      </div>
    </motion.div>
  );
}
