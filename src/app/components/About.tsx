"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.png";
import univ from "../../../public/images/univelcity.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("about");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    AOS.init();
    const savedLocale = localStorage.getItem("preferredLanguage") || "en";
    setSelectedLanguage(savedLocale);
  }, []);

  return (
    <section id="about">
      <div className="flex flex-col-reverse md:flex-row px-8 py-24 md:max-w-7xl md:mx-auto items-center justify-around md:py-14">
        <div className="md:max-w-md">
          <div>
            <h1 className="font-bold text-3xl">{t("Heading")}</h1>
            <h3 className="text-xl">{t("Paragraph")}</h3>
          </div>
          <div className="py-12">
            <h1 className="font-bold text-3xl">{t("Heading1")}</h1>
            <h3 className="text-xl">{t("Paragraph2")}</h3>
          </div>
        </div>
        <div>
          <Image src={logo} width={500} alt="logo.png" />
        </div>
      </div>
      <div className="py-16">
        <h1 className="text-center font-medium text-2xl md:text-3xl">{t("About")}</h1>
        <div className="flex md:flex-row flex-col justify-between max-w-6xl mx-auto gap-16 py-20 px-10 md:px-20" data-aos="fade-up">
          <div>
            <Image className="fancyBorder border-4 border-[#58BBFF] rounded-[29%_71%_68%_32%_/_24%_25%_75%_76%]" src={univ} width={400} alt="univ" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl">{t("ask")}</h1>
            <p className="max-w-xl py-5 pt-12 md:text-xl lg:text-lg">{t("reason")}</p>
            <Link href={`/${selectedLanguage}/about`} className="bg-[#58BBFF] text-white rounded-md py-3 px-5">
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
