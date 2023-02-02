import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, my name is Arsham', 'This is my protfolio'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col text-center space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/WhatsApp Image 2022-09-09 at 10.24.57.jpeg"
        alt="Picture of the arsham"
        width={500}
        height={500}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="/about">
            <button className="heroButton">about</button>
          </Link>
          <Link href="/Experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="/Skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="/Projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
