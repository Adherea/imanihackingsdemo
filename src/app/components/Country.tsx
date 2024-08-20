"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import map from "../../../public/images/assets2/countries.png";
import tanzania from "../../../public/images/flags/tanzania.jpg";
import indonesia from "../../../public/images/flags/indonesia.jpg";
import philipines from "../../../public/images/flags/philipines.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faTrophy, faGlobe, faBlackboard } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

function Country() {
  const t = useTranslations("country");
  const a = useTranslations("achieve");
  const [startCounting, setStartCounting] = useState(false);
  const countUpSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
            observer.disconnect(); // Stop observing after triggering
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (countUpSectionRef.current) {
      observer.observe(countUpSectionRef.current);
    }

    return () => {
      if (countUpSectionRef.current) {
        observer.unobserve(countUpSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="countries" className="py-28 px-8 md:px-0">
      <div className="container mx-auto bg-[#ADD8E6] rounded-xl px-6 py-12">
        <h1 className="text-center text-[#212A94] md:text-5xl text-3xl font-semibold py-10">{t("title")}</h1>
        <Image src={map} alt="map.jpg" className="w-full" />

        <div className="">
          <div className="text-[#212A94] ">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-12">
              <div>
                <Image src={tanzania} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">{t("country1.name")}</h1>
                <p className="py-2">{t("country1.desc")}</p>
              </div>
              <div>
                <Image src={indonesia} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">{t("country2.name")}</h1>
                <p className="py-2">{t("country2.desc")}</p>
              </div>
              <div>
                <Image src={philipines} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">{t("country3.name")}</h1>
                <p className="py-2">{t("country3.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-center text-4xl font-medium">{a("title")}</h1>
        <div ref={countUpSectionRef} className="max-w-xl mx-auto text-center py-24 grid grid-cols-2 gap-8">
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#FF5081]" icon={faBlackboard} />
            <h1 className="py-3 text-4xl font-bold">{startCounting && <CountUp start={0} end={354} duration={3} />}</h1>
            <h4 className="text-gray-500">{a("achievement1.name")}</h4>
          </div>
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#B2D672]" icon={faPerson} />
            <h1 className="py-3 text-4xl font-bold">{startCounting && <CountUp start={0} end={746} duration={3} />}</h1>
            <h4 className="text-gray-500">{a("achievement2.name")}</h4>
          </div>
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#48CEBB]" icon={faTrophy} />
            <h1 className="py-3 text-4xl font-bold">{startCounting && <CountUp start={0} end={1} duration={3} />}</h1>
            <h4 className="text-gray-500">{a("achievement3.name")}</h4>
          </div>
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#F18B50]" icon={faGlobe} />
            <h1 className="py-3 text-4xl font-bold">{startCounting && <CountUp start={0} end={5} duration={3} />}</h1>
            <h4 className="text-gray-500">{a("achievement4.name")}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Country;
