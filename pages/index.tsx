import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>Arjun's Portfolio</Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
};

export default Home;
