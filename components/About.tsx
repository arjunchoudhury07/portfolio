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
        className="h-96 w-96 rounded-3xl"
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
        className="space-y-10"
      >
        <h4 className="text-4xl font-semibold ">
          "You can always be thinner you look better."
          <p className="flex justify-end mr-5 pt-5">-Patrik Bateman</p>
        </h4>
      </motion.div>
    </div>
  );
}

export default About;
