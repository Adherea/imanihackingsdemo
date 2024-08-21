"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/images/logo.png";
import historylogo from "../../../../public/images/vectors/history.png";
import globalLogo from "../../../../public/images/vectors/laptop.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation"; // Hanya gunakan usePathname

function About() {
  const t = useTranslations("aboutpage");
  const pathname = usePathname(); // Ambil pathname dari usePathname

  return (
    <section className="bg-[#F8F8F8]">
      <nav className="flex items-center text-white justify-between md:px-12 px-5 text-xl bg-[#79c9e0] ">
        <div>
          <Image src={logo} width={140} alt="logo" />
        </div>
        <div>
          <ul className="w-fit mx-auto">
            <li>
              <Link href={`/${pathname.split("/")[1]}/`} className="group relative text-center cursor-pointer">
                {t("home")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-center text-4xl">{t("title")}</h1>
        <div className="flex lg:flex-row flex-col px-8 items-center gap-5 justify-between">
          <div>
            <Image src={historylogo} width={400} alt="historyLogo" />
          </div>
          <div>
            <p className="max-w-2xl">{t("desc")}</p>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col px-8 items-center gap-5 justify-between py-12">
          <div>
            <Image src={globalLogo} width={260} alt="globalLogo" />
          </div>
          <div>
            <h1 className="py-7 text-4xl font-semibold">{t("subtitle")}</h1>
            <p className="max-w-2xl text-xl">{t("desc2")}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center py-10 md:px-5 px-3">
        <h1 className="text-xl md:text-4xl py-9">{t("ready")}</h1>
        <p className="max-w-4xl mx-auto py-4">{t("subready")}</p>
        <div className="py-10">
          <Link href={`/${pathname.split("/")[1]}/register`} className="bg-[#407BFF] text-white rounded-md py-3 px-5">
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
