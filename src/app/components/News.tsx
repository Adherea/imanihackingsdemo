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

function News() {
  return (
    <section id="news" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium my-5">News</h1>
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
                {news.map((x) => {
                  return (
                    <>
                      <div key={x.id} className="h-full w-full bg-white py-9 px-6 rounded-xl text-center hover:cursor-pointer duration-700 hover:-translate-y-6 hover:shadow-2xl ">
                        <Shinbun images={x.images} title={x.title} desc={x.desc} />
                      </div>
                    </>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
}

export default News;
