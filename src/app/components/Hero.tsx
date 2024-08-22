import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="hero-background bg-cover md:py-0 ">
      <div className="text-white md:p-56 bg-gradient-to-r from-[#82B3C5] py-24 ">
        <div className="md:max-w-7xl lg:max-w-2xl leading-tight px-5 py-6 md:py-0 md:px-0">
          <h1 className="text-5xl leading-tight md:text-4xl xl:text-6xl  font-medium"> {t("Heading")}</h1>
          <p className="md:py-5 text-2xl font-medium md:text-xl py-5 ">{t("Paragraph")}</p>
          <Link href="/register" className="bg-[#407BFF] text-white rounded-md py-3 px-5 hover:bg-[#769df3] duration-300 hover:rounded-full border-2 border-[#407BFF] hover:border-white ">
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
