import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo.png";
import historylogo from "../../../public/images/vectors/history.png";
import globalLogo from "../../../public/images/vectors/laptop.png";
import { faBars, faXmark, faPaperPlane, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function about() {
  return (
    <section className="bg-[#F8F8F8]">
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

      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-center text-4xl">History</h1>
        <div className="flex lg:flex-row flex-col px-8 items-center gap-5 justify-between">
          <div className="">
            <Image src={historylogo} width={400} alt="historyLogo" />
          </div>
          <div className="">
            <p className="max-w-2xl">
              IMANI Hacking is a term that incorporates elements from Swahili, specifically "imani" and "hacking". This name combines the following components: Belief: "IMANI" in Swahili represents "belief," emphasizing strong convictions
              in personal beliefs and dreams. Hacking: "Hacking" refers to the act of using technology and knowledge to discover new methods, solve problems, and pursue possibilities. In this context, it underscores the development of
              skills and creativity as a technician to shape the future. Now (Ima ni): The Japanese phrase "今に" (Ima ni) is added to "IMANI Hacking," emphasizing the importance of seizing the current moment and focusing on the "now" to
              realize dreams and goals. This element underscores the intention to take action at the right time.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col px-8 items-center gap-5 justify-between py-12">
          <div className="">
            <Image src={globalLogo} width={260} alt="historyLogo" />
          </div>
          <div className="">
            <h1 className="py-7 text-4xl font-semibold">Global growth</h1>
            <p className="max-w-2xl text-xl">
              This boot camp was initially developed as a program with Tanzania as its first offering destination. Since then, it has expanded to neighboring African countries and various Asian nations. Therefore, "IMANI Hacking" symbolizes
              an IT boot camp that harnesses individual beliefs, technical skills, and the present moment to pursue possibilities, emphasizing the development of new services, the cultivation of a global mindset, self-realization, and
              creativity from emerging countries.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-10 md:px-5">
        <h1 className="text-4xl py-9">Ready to supercharge your IT skills at IMANI HACKING BOOTCAMP?</h1>
        <p className="max-w-4xl mx-auto py-4">
          So, what are you waiting for? Join IMANI HACKING BOOTCAMP today and unlock your IT potential with our expert-designed programs for beginners and professionals. Transform knowledge into formidable skills, embrace flexibility
          through online learning, and embark on a journey to IT excellence and innovation!
        </p>
        <div className="py-10">
          <Link href="/register" className="bg-[#407BFF] text-white rounded-md py-3 px-5">
            JOIN US NOW!{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default about;
