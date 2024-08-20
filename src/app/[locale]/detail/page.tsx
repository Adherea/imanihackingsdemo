"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/images/logo.png";
import picture1 from "../../../../public/images/contents/Picture1.jpg";
import picture2 from "../../../../public/images/contents/Picture2.jpg";
import picture3 from "../../../../public/images/contents/Picture3.jpg";
import training from "../../../../public/images/contents/trainings.png";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

function Page() {
  const t = useTranslations("contentpage");
  const router = useRouter();
  const pathname = usePathname();

  // Handle redirect ke home dengan locale yang benar
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
      <div className="px-9">
        <h1 className="text-center text-4xl font-semibold py-10">{t("title")}</h1>

        <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
          <div className="">
            <h1 className="py-5 text-3xl ">{t("session1")}</h1>
            <p className="max-w-xl">{t("desc1")}</p>
          </div>

          <div className="max-w-xl">
            <Image src={picture1} alt="image" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex md:flex-col-reverse py-7 lg:flex-row flex-col-reverse items-center justify-between">
          <div className="">
            <h1 className="py-5 text-3xl ">{t("session2")}</h1>
            <p className="max-w-xl">{t("desc2")}</p>
          </div>

          <div className="max-w-xl">
            <Image src={picture2} alt="image" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
          <div className="">
            <h1 className="py-5 text-3xl ">{t("session3")}</h1>
            <p className="max-w-xl">{t("desc3")}</p>
          </div>

          <div className="max-w-xl">
            <Image src={picture3} alt="image" />
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto py-20 px-8">
        <h1 className="text-center text-4xl py-16">{t("title2")}</h1>
        <Image src={training} alt="training.png" width={900} />

        <h1 className="py-24 text-center text-4xl font-semibold">{t("Our updated schedule")}</h1>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                No
              </th>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                Date
              </th>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                Agenda
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                1.
              </th>
              <td className="border border-gray-300 px-4 py-2">{t("date1")}</td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                2.
              </th>
              <td className="border border-gray-300 px-4 py-2">{t("date2")}</td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda2")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                3.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date3")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda3")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                4.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date4")}
              </td>
              <td>{t("agenda4")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                5.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date5")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda5")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                6.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date6")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda6")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                7.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date7")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda7")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                8.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date8")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda8")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                9.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date9")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda9")}</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                10.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                {t("date10")}
              </td>
              <td className="border border-gray-300 px-4 py-2">{t("agenda10")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Page;
