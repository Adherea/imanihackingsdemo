"use client";
import React from "react";
import logo from "../../../../public/images/logo.png";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import picture4 from "../../../../public/images/contents/Picture4.jpg";
import picture5 from "../../../../public/images/contents/Picture5.jpg";
import picture6 from "../../../../public/images/contents/Picture6.jpg";
import picture7 from "../../../../public/images/contents/uniquqness.png";
import picture8 from "../../../../public/images/vectors/Jan43.jpg";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Page() {
  const t = useTranslations("uniq");
  const router = useRouter();
  const pathname = usePathname();
  const handleHomeRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const currentLocale = pathname.split("/")[1];
    router.push(`/${currentLocale}/`);
  };

  return (
    <section>
      <nav className="flex items-center text-white justify-between md:px-12 px-5 text-xl bg-[#79c9e0]">
        <div>
          <Image src={logo} width={140} alt="logo" />
        </div>
        <div>
          <ul className="w-fit mx-auto">
            <li>
              <a href="/" onClick={handleHomeRedirect} className="group relative text-center cursor-pointer">
                {t("home")}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="py-10">
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium">{t("title")}</h1>

        <div className="py-14 px-8">
          <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
            <div>
              <h1 className="py-5 text-2xl md:text-3xl">{t("session1")}</h1>
              <p className="max-w-xl">{t("desc1")}</p>
            </div>

            <div className="max-w-xl">
              <Image src={picture4} alt="image" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex md:flex-col-reverse py-7 lg:flex-row flex-col-reverse items-center justify-between">
            <div>
              <h1 className="py-5 text-2xl md:text-3xl">{t("session2")}</h1>
              <p className="max-w-xl">{t("desc2")}</p>
            </div>

            <div className="max-w-xl">
              <Image src={picture5} alt="image" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
            <div>
              <h1 className="py-5 text-2xl md:text-3xl">{t("session3")}</h1>
              <p className="max-w-xl">{t("desc3")}</p>
            </div>

            <div className="max-w-xl">
              <Image src={picture6} alt="image" />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-center text-xl md:text-2xl py-10">{t("misc")}</h1>
          <div className="pt-12 mx-auto">
            <Image src={picture7} alt="unique.jpg" />
          </div>
        </div>
      </div>
      <div className="py-20 px-4">
        <div className="w-fit mx-auto">
          <h1 className="text-center text-4xl">
            学習 <span className="font-semibold text-[#2568EF]">施設</span>
          </h1>
          <div className="">
            <h2 className="md:text-xl py-9 text-base">イマニ・ハッキングに参加する学生達がもらう事：</h2>
            <div className="flex items-center gap-16 md:flex-row flex-col-reverse">
              <div className="py-9">
                <h2 className="text-xl">
                  <FontAwesomeIcon className="mx-2 text-[#2568EF] text-2xl" icon={faCheckToSlot} width={30} />
                  技術開発のスキル
                </h2>
                <h2 className="text-xl py-2">
                  <FontAwesomeIcon className="mx-2 text-[#2568EF] text-2xl" icon={faCheckToSlot} width={30} />
                  会社にインタビューする事
                </h2>
                <h2 className="text-xl ">
                  <FontAwesomeIcon className="mx-2 text-[#2568EF] text-2xl" icon={faCheckToSlot} width={30} />
                  職業の昇進
                </h2>
                <h2 className="text-xl py-2">
                  <FontAwesomeIcon className="mx-2 text-[#2568EF] text-2xl" icon={faCheckToSlot} width={30} />
                  業界のつながり
                </h2>
                <h2 className="text-xl">
                  <FontAwesomeIcon className="mx-2 text-[#2568EF] text-2xl" icon={faCheckToSlot} width={30} />
                  指導とサポート
                </h2>
              </div>
              <div className="">
                <Image src={picture8} alt="logo.png" width={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
