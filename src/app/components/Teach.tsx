"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import teach1 from "../../../public/images/support/Dosen.jpg";
import teach2 from "../../../public/images/support/daniel.jp.jpg";
import teach3 from "../../../public/images/Emmanuel Tarimo.jpg";
import teach4 from "../../../public/images/support/nuru.jpg";
import teach5 from "../../../public/images/support/Gery.png";
import mentor1 from "../../../public/images/support/saki.png";
import mentor2 from "../../../public/images/support/naho.png";
import mentor3 from "../../../public/images/support/Douglus.png";
const instructors = [
  {
    id: "instructor1",
    image: teach1,
    profil: "https://www.linkedin.com/in/kelechukwu-onwukamike-phd/",
  },
  {
    id: "instructor2",
    image: teach2,
    profil: "https://www.linkedin.com/in/daniel-makyao-6ab072223/",
  },
  {
    id: "instructor3",
    image: teach3,
    profil: "https://www.linkedin.com/in/emmanuel-tarimo-36b82a117/?originalSubdomain=tz",
  },
  {
    id: "instructor4",
    image: teach4,
    profil: "https://www.linkedin.com/in/nuha-n-488424b8/",
  },
  {
    id: "instructor5",
    image: teach5,
    profil: "https://www.linkedin.com/in/gerrysabar/",
  },
];

const mentorss = [
  {
    id: "mentor1",
    image: mentor1,
    profil: "https://www.linkedin.com/in/saki-yanagihara-290024204/",
  },
  {
    id: "mentor2",
    image: mentor2,
    profil: "https://www.linkedin.com/in/naho-chujo-1731b9179/",
  },
  {
    id: "mentor3",
    image: mentor3,
    profil: "https://github.com/douglas-fortunatus",
  },
];

function Teach() {
  const t = useTranslations("instructors");
  const m = useTranslations("mentors");
  return (
    <>
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
                <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium my-5">{t("title")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-grab active:cursor-grabbing ">
                  {instructors.map((instructor, index) => (
                    <div key={index} className="bg-[#58BBFF] rounded-2xl flex flex-col">
                      <Image className="md:w-1/3 w-1/2 mx-auto rounded-full border-4 my-5 border-white" src={instructor.image} alt="instructor.jpg" />
                      <div className="bg-white rounded-2xl py-5 px-6 mt-3 h-full flex flex-col justify-between">
                        <div>
                          <h1 className="text-center text-3xl">{t(`${instructor.id}.name`)}</h1>
                          <h4 className="text-center py-5">
                            <span className="font-semibold">Specialization:</span> {t(`${instructor.id}.specialization`)}
                          </h4>
                          <p className="text-center">{t(`${instructor.id}.desc`)}</p>
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
                <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium my-5">{m("title")}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mentorss.map((x, index) => (
                    <div key={index} className="bg-[#58BBFF] rounded-2xl flex flex-col">
                      <Image className="md:w-1/3 w-1/2 mx-auto rounded-full border-4 my-5 border-white" src={x.image} alt="mentor.jpg" />
                      <div className="bg-white rounded-2xl py-5 px-6 -mt-3 h-full flex flex-col flex-grow">
                        <h1 className="text-center text-3xl">{m(`${x.id}.name`)}</h1>
                        <h4 className="text-center py-5">
                          <span className="font-semibold">Specialization:</span>
                          {m(`${x.id}.specialization`)}
                        </h4>
                        <p className="text-center">{m(`${x.id}.desc`)}</p>
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
    </>
  );
}

export default Teach;
