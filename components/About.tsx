import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h3
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        About
      </motion.h3>

      <motion.img
        src="/dp.jpg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="mt-10 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:h-80 md:w-80 xl:w-[320px] xl:h-[400px]"
      />
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="space-y-5 px-0 md:px-10"
      >
        <h4 className="text-xl xl:text-3xl text-center font-semibold">
          Here is a little Background
        </h4>
        <p className="font-extralight text-md text-center">
          Hey there, My name is Arjun Choudhury. Currently I am pursuing B.Tech
          in Information Technology from Jalpaiguri Government Engineering
          College.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
