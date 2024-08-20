"use client";
import Image from "next/image";
import React from "react";
import news from "../Data/news";
import Shinbun from "../components/Shinbun";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import news1 from "../../../public/images/support/CEO/3.jpg";
import news2 from "../../../public/images/support/CEO/1.png";
import news3 from "../../../public/images/support/CEO/4.jpg";
import news4 from "../../../public/images/support/CEO/Picture5.jpg";
import news5 from "../../../public/images/support/CEO/5.jpg";
import { useTranslations } from "next-intl";

const newss = [
  {
    id: "news1",
    images: news1,
  },
  {
    id: "news2",
    images: news2,
  },

  {
    id: "news3",
    images: news3,
  },
  {
    id: "news4",
    images: news4,
  },
  {
    id: "news5",
    images: news5,
  },
];

function News() {
  const t = useTranslations("News");
  return (
    <section id="news" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium my-5">{t("title")}</h1>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center px-5 py-10 gap-6">
                {newss.map((x, index) => {
                  return (
                    <>
                      <div key={index} className=" h-full w-full bg-white py-9 px-6 rounded-xl text-center hover:cursor-pointer duration-700 hover:-translate-y-6 hover:shadow-2xl ">
                        <div className="w-fit mx-auto">
                          <Image src={x.images} alt="picture.png" />
                        </div>
                        <h1 className="text-3xl py-5">{t(`${x.id}.date`)}</h1>
                        <p className="">{t(`${x.id}.desc`)}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default News;
