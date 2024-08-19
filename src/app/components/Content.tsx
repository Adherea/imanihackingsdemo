"use client";
import React from "react";
import { faCirclePlay, faChalkboardTeacher, faLaptop, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataCategory from "../Data/category";
import Category from "../components/Category";
import Link from "next/link";

function Content() {
  return (
    <section className="py-14" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="">
          <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium">Contents</h1>

          <div className="grid md:grid-cols-2 md:px-9  lg:px-8 lg:grid-cols-3 grid-cols-1 px-10  gap-6  py-14">
            <div className="text-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-5xl" />
              <h1 className="text-3xl py-4">Video Session</h1>
              <p>Students will have a course that given from the lectures, in order to have a great knowledge of the technology that student want to be in the future</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-5xl" />
              <h1 className="text-3xl py-4">Mentoring Session</h1>
              <p>Students meet their mentors in order to have a disscuss about the projects, soft skills and hard skills, also asking about the future plan of the Students.</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faLaptop} className="text-5xl" />
              <h1 className="text-3xl py-4">Lecture Session</h1>
              <p>
                In weekly, Student will have a zoom live lecture about the development skills including, self development, soft skills, hard skills, in order to be ready working as engineer in the future after participating in our
                porgramming bootcamp.
              </p>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Link href={"/detail"} className="bg-[#58BBFF] text-white rounded-md py-3 px-5 ">
              Read more <FontAwesomeIcon icon={faCircleInfo} className="text-base" />
            </Link>
          </div>
        </div>
        <div id="services" className="lg:py-36 py-24">
          <h1 className="text-center text-4xl font-semibold">Our lesson category</h1>
          <div className="grid md:grid-cols-2 md:px-6 lg:grid-cols-3 grid-cols-1 px-10 lg:px-0 gap-6 py-14">
            {DataCategory.map((x) => (
              <div key={x.id}>
                <Category pic={x.images} title={x.title} desc={x.desc} />
              </div>
            ))}
          </div>
          <div className="mx-auto w-fit">
            <Link href="/unique" className="bg-[#58BBFF] text-white rounded-md py-3 px-5 ">
              Read more <FontAwesomeIcon icon={faCircleInfo} className="text-base" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
