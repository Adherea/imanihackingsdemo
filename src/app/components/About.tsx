"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../../../public/images/logo.png";
import univ from "../../../public/images/univelcity.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about">
      <div className="flex flex-col-reverse md:flex-row px-8 py-24  md:max-w-7xl md:mx-auto items-center justify-around md:py-14">
        <div className="md:max-w-md">
          <div>
            <h1 className="font-bold text-3xl">VISION</h1>
            <h3 className="text-xl">Designing Futures through Belief and IT</h3>
          </div>
          <div className="py-12">
            <h1 className="font-bold text-3xl">MISSION</h1>
            <h3 className="text-xl">To achieve the goal to be an experienced professional and gain the soft skills to work as one global team.</h3>
          </div>
        </div>
        <div className="">
          <Image src={logo} width={500} alt="logo.png" />
        </div>
      </div>
      <div className="py-16">
        <h1 className="text-center font-medium text-4xl ">About Us</h1>

        <div className="flex md:flex-row flex-col justify-between max-w-6xl mx-auto gap-16 py-20 px-10 md:px-20" data-aos="fade-up">
          <div>
            <Image className="fancyBorder border-4 border-[#58BBFF]" src={univ} width={400} alt="logo.png" />
          </div>
          <div className="">
            <h1 className="text-4xl">Why "Imani Hacking"?</h1>
            <p className="max-w-xl py-5 pt-12 md:text-xl lg:text-lg">
              Welcome to IMANI HACKING BOOTCAMP, where we transform knowledge into formidable skills. We're a dedicated tech training center committed to helping you reach your IT potential. With expert-designed bootcamp programs for
              beginners and professionals, we offer flexibility through online learning. Join us on the journey to IT excellence and innovation.
            </p>
            <Link href="/about" className="bg-[#58BBFF] text-white rounded-md py-3 px-5">
              Read more..
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
