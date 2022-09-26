import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import dp from "../assets/dp.jpg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello Friend", "The name is Arjun Choudhury"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center space-y-8 items-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={dp}
        height={220}
        width={240}
        className="relative rounded-full mx-auto object-cover"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 tracking-[10px] pb-6">
          IT Undergraduate
        </h2>
        <h1 className="text-5xl xl:text-6xl font-semibold ">
          <span className="mr-3">
            {text}
            <Cursor cursorColor="orange" />
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
      </div>
    </div>
  );
}

export default Hero;
