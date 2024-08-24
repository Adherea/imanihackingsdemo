"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Course() {
  const t = useTranslations("company");
  const pathname = usePathname();

  return (
    <section>
      <nav className="flex items-center text-white justify-between md:px-12 px-5 text-xl bg-[#79c9e0] ">
        <div>
          <Image src="/images/logo.png" alt="logo" width={140} height={200} />
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
      <div>
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-2xl md:text-3xl font-medium pt-12">{t("title")}</h1>
        <h1 className="text-center max-w-3xl md:text-2xl mx-auto py-10 px-2 text-lg">{t("desc")}</h1>

        <div className="bg-gray-50 p-8">
          <div className="container mx-auto grid lg:grid-cols-4 grid-cols-1 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">{t("course1.name")}</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong className="md:text-sm text-base">{t("course1.knowledge1")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Python (Flask, FastAPI, Django, Selenium)</li>
                    <li>Go (Echo and Gin) / Swift</li>
                    <li>JavaScript (Node.js, Express JS, ReactJS, NextJS)</li>
                    <li>Java (Springboot)</li>
                    <li>HTML, HTMX, PHP, CSS, JS</li>
                    <li>My-SQL, PostgreSQL, MongoDB</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course1.knowledge2")}</strong>
                </li>
                <li>
                  <strong>{t("course1.knowledge3")}</strong>
                  <ul className="list-disc ml-6">
                    <li>{t("course1.knowledge4")}</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">{t("course2.name")}</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>{t("course2.knowledge1")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Python (Flask, FastAPI, Django, Selenium)</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course2.knowledge2")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>etc....</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course2.knowledge3")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Probability</li>
                    <li>Regression analysis</li>
                    <li>Hypothesis testing</li>
                    <li>Linear algebra, calculus, probability theory</li>
                    <li>Statistics and machine learning algorithms</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course2.knowledge4")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Data preprocessing</li>
                    <li>Visualization</li>
                    <li>Feature engineering</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course2.knowledge5")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Web scraping</li>
                    <li>Using APIs to collect data from the web</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">{t("course3.name")}</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>{t("course3.knowledge1")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Layout, color schemes, and typography</li>
                    <li>Adobe Illustrator, Photoshop, Figma</li>
                    <li>HTML/CSS/JavaScript</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course3.knowledge2")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Trends of competitors</li>
                    <li>Market changes</li>
                    <li>Web analytics tools, SEO</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course3.knowledge3")}</strong>
                </li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">{t("course5.name")}</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>{t("course5.knowledge1")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Python / R</li>
                    <li>Data analysis libraries (Pandas, NumPy)</li>
                    <li>Machine learning libraries (Scikit-learn, TensorFlow)</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course5.knowledge2")}</strong>
                </li>
                <li>
                  <strong>{t("course5.knowledge3")}</strong>
                  <ul className="list-disc ml-6">
                    <li>SQL</li>
                  </ul>
                </li>
                <li>
                  <strong>{t("course5.knowledge4")}</strong>
                  <ul className="list-disc ml-6">
                    <li>Excel to organize and visualize data</li>
                    <li>How to use web scraping and APIs</li>
                    <li>How to use image recognition tools and natural language processing tools by AI</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
