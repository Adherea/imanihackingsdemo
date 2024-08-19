"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import Instructors from "../Data/instructors";
import mentors from "../Data/mentors";
import Link from "next/link";
function Teach() {
  return (
    <section id="members" data-aos="fade-up">
      <div className="">
        <div className="container mx-auto  px-8 py-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            initialSlide={0}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium my-5">Instructors</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-grab active:cursor-grabbing">
                {Instructors.map((instructor) => (
                  <div key={instructor.id} className="bg-[#58BBFF] rounded-2xl  flex flex-col">
                    <Image className="md:w-1/3 w-1/2 mx-auto rounded-full border-4 my-5 border-white" src={instructor.image} alt="instructor.jpg" />
                    <div className="bg-white rounded-2xl py-5 px-6 mt-3 h-full flex flex-col justify-between">
                      <div>
                        <h1 className="text-center text-3xl">{instructor.name}</h1>
                        <h4 className="text-center py-5">
                          <span className="font-semibold">Specialization:</span> {instructor.specialization}
                        </h4>
                        <p className="text-center">{instructor.desc}</p>
                      </div>
                      <div className="mx-auto w-fit py-7">
                        <Link target="_blank" href={`${instructor.profil}`} className="bg-[#58BBFF] text-white rounded-full py-1 px-5">
                          Visit Me
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium my-5">Mentors</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentors.map((x) => (
                  <div key={x.id} className="bg-[#58BBFF] rounded-2xl flex flex-col">
                    <Image className="md:w-1/3 w-1/2 mx-auto rounded-full border-4 my-5 border-white" src={x.image} alt="mentor.jpg" />
                    <div className="bg-white rounded-2xl py-5 px-6 -mt-3 h-full flex flex-col flex-grow">
                      <h1 className="text-center text-3xl">{x.name}</h1>
                      <h4 className="text-center py-5">
                        <span className="font-semibold">Specialization:</span> {x.specialization}
                      </h4>
                      <p className="text-center">{x.desc}</p>
                      <div className="mt-auto mx-auto w-fit py-7">
                        <Link target="_blank" href={`${x.profil}`} className="bg-[#58BBFF] text-white rounded-full py-1 px-5">
                          Visit Me
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Teach;
