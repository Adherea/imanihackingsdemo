import React from "react";
import logo1 from "../../../public/images/support/daraJapan.png";
import logo2 from "../../../public/images/support/79f00f_4e5acee7ad284349865964e001c60413~mv2.png";
import logo3 from "../../../public/images/support/tokyouHostel.png";
import Image from "next/image";
function Support() {
  return (
    <section className="bg-[#a2d9ff] md:py-6 md:px-5">
      <div className="">
        <h1 className="text-white text-2xl  md:text-4xl text-center">Support By:</h1>
      </div>
      <div className="flex lg:flex-row md:flex-col flex-col py-11 md:py-0 items-center justify-center gap-4">
        <Image src={logo2} alt="logo" className="lg:w-1/6 w-2/5" />
        <Image src={logo1} alt="logo" className="lg:w-1/6 w-1/2" />
        <Image src={logo3} alt="logo" className="lg:w-1/6 w-1/2" />
      </div>
    </section>
  );
}

export default Support;
