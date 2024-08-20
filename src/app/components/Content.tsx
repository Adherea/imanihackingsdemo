"use client";
import React from "react";
import { faCirclePlay, faChalkboardTeacher, faLaptop, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataCategory from "../Data/category";
import Category from "../components/Category";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import picture1 from "../../../public/images/assets1/Picture4.png";
import picture2 from "../../../public/images/assets1/Picture5.png";
import picture3 from "../../../public/images/assets1/Picture6.png";
import picture4 from "../../../public/images/assets1/Picture7.png";
import picture5 from "../../../public/images/assets1/Picture8.png";
import picture6 from "../../../public/images/assets1/Picture9.png";

function Content() {
  const t = useTranslations("content");
  return (
    <section className="py-14" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="">
          <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium">{t("Title")}</h1>

          <div className="grid md:grid-cols-2 md:px-9  lg:px-8 lg:grid-cols-3 grid-cols-1 px-10  gap-6  py-14">
            <div className="text-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-5xl" />
              <h1 className="text-xl md:text-2xl py-4">{t("Heading")}</h1>
              <p className="text-xs md:text-xl">{t("Paragraph")}</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-5xl" />
              <h1 className="text-xl md:text-2xl py-4">{t("Heading2")}</h1>
              <p className="text-xs md:text-xl">{t("Paragraph2")}</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faLaptop} className="text-5xl" />
              <h1 className="text-xl md:text-2xl py-4">{t("Heading3")}</h1>
              <p className="text-xs md:text-xl">{t("Paragraph3")}</p>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Link href={"/detail"} className="bg-[#58BBFF] text-white rounded-md py-3 px-5 ">
              {t("Button")} <FontAwesomeIcon icon={faCircleInfo} className="text-base" />
            </Link>
          </div>
        </div>
        <div id="services" className="lg:py-36 py-24">
          <h1 className="text-center text-4xl font-semibold">{t("Title2")}</h1>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:px-6 lg:grid-cols-3 grid-cols-1 px-10 lg:px-0 gap-6 py-14">
            <div className="text-center">
              <Image width={120} src={picture1} alt="pic" className=" mx-auto" />
              <h2>{t("Subheading1")}</h2>
              <p>{t("Subparagraph1")}</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture2} alt="pic" className=" mx-auto" />
              <h2>{t("Subheading2")}</h2>
              <p>{t("Subparagraph2")}</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture3} alt="pic" className=" mx-auto" />
              <h2>{t("Subheading3")}</h2>
              <p>{t("Subparagraph3")}</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture4} alt="pic" className=" mx-auto" />
              <h2>{t("Subheading4")}</h2>
              <p>{t("Subparagraph4")}</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture5} alt="pic" className=" mx-auto" />
              <h2>{t("Subheading5")}</h2>
              <p>{t("Subparagraph5")}</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture6} alt="pic" className=" mx-auto" />
              <h2>{t("Subheading6")}</h2>
              <p>{t("Subparagraph6")}</p>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Link href="/unique" className="bg-[#58BBFF] text-white rounded-md py-3 px-5 ">
              Read more <FontAwesomeIcon icon={faCircleInfo} className="text-base" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
