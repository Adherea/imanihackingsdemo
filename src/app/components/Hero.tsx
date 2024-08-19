import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="hero-background bg-cover md:py-0">
      <div className="text-white md:p-56 bg-gradient-to-r from-[#82B3C5]">
        <div className="md:max-w-xl max-w-xs px-5 py-6 md:py-0 md:px-0">
          <h1 className="text-3xl md:text-6xl font-medium">Produce a global Tech leader beyond borders.</h1>
          <p className="md:py-5 md:text-xl py-5 ">
            Becoming Global Tech Leaders Together. We empower people with advanced tech skills, crossing borders to create future tech innovators. Join us on this journey to become a global tech leader.
          </p>
          <Link href="/register" className="bg-[#407BFF] text-white rounded-md py-3 px-5 hover:bg-[#769df3] duration-300 hover:rounded-full border-2 border-[#407BFF] hover:border-white ">
            JOIN US NOW!{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
