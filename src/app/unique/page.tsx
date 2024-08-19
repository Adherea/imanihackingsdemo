import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import picture4 from "../../../public/images/contents/Picture4.jpg";
import picture5 from "../../../public/images/contents/Picture5.jpg";
import picture6 from "../../../public/images/contents/Picture6.jpg";
import picture7 from "../../../public/images/contents/uniquqness.png";

function page() {
  return (
    <section>
      <nav className=" flex items-center  text-white justify-between md:px-12 px-5  text-xl bg-[#79c9e0]">
        <div>
          <Image src={logo} width={140} alt="logo" />
        </div>
        <div>
          <ul className="w-fit mx-auto">
            <li>
              <Link href="/" className="group relative text-center">
                Back To Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="py-10">
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium">Our Uniqueness</h1>

        <div className="py-14 px-8 ">
          <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
            <div className="">
              <h1 className="py-5 text-3xl ">Global Empowerment </h1>
              <p className="max-w-xl">
                Through an integrated program, participants can develop a global mindset, entrepreneurial spirit, and problem-solving abilities. Furthermore, they graduate with the perseverance of lifelong learning and the ability to work
                effectively within teams. This enables young individuals from emerging countries to establish connections with society and become a source of income as high-skilled professionals
              </p>
            </div>

            <div className="max-w-xl">
              <Image src={picture4} alt="image" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex md:flex-col-reverse py-7 lg:flex-row flex-col-reverse items-center justify-between">
            <div className="">
              <h1 className="py-5 text-3xl ">Career Support</h1>
              <p className="max-w-xl">
                To bridge the gap between job seekers and employers, we provide an environment where participants can gain practical experience by forming teams and receiving support from well-experienced engineers during IMANI bootcamp.
                For those aspiring to work in Japanese companies or from other countries, we offer lectures on English and Japanese language necessary for business as well as other employability skills, enhancing their chances of a
                realistic and practical job match.
              </p>
            </div>

            <div className="max-w-xl">
              <Image src={picture5} alt="image" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
            <div className="">
              <h1 className="py-5 text-3xl ">Talent Development </h1>
              <p className="max-w-xl">
                We provide support from mentors who can help participants identify their future goals and design action plans and career paths to achieve them. We also have a job placement support system that includes interview
                opportunities with potential employers for participants with sufficient experience. Additionally, by creating a cycle that provide lectures to new participants, we ensure that the fruits of learning translate into income,
                boosting their confidence. This model aims to address the employment needs of young people in emerging countries while resolving Japan's IT talent shortage.
              </p>
            </div>

            <div className="max-w-xl">
              <Image src={picture6} alt="image" />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-center text-xl md:text-2xl py-10">By instilling Japanese business ethics, we enhance participants humanity and equip them with sustainable career skills.</h1>
          <div className="pt-12 mx-auto">
            <Image src={picture7} alt="unique.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
