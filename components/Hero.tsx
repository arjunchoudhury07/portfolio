import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const { text, count } = useTypewriter({
    words: [
      "Hello Friend",
      "The name is Arjun Choudhury",
      "Do you know I am utterly Insane",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center space-y-8 items-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/dp.jpg"
        height={200}
        width={200}
        className="relative rounded-full mx-auto object-cover h-40 w-40"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="z-20"
      >
        <h2 className="text-[12px] md:text-sm uppercase text-gray-300 tracking-[10px] pb-6">
          IT Undergraduate
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold ">
          <span className="">
            {text}
            <Cursor />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">projects</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
