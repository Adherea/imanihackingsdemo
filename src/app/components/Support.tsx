import React from "react";
import logo1 from "../../../public/images/support/daraJapan.png";
import logo2 from "../../../public/images/support/79f00f_4e5acee7ad284349865964e001c60413~mv2.png";
import logo3 from "../../../public/images/support/tokyouHostel.png";
import Image from "next/image";
function Support() {
  return (
    <section className="bg-[#a2d9ff] md:py-6 md:px-5">
      <div className="">
        <h1 className="text-white text-4xl text-center">Support By:</h1>
      </div>
      <div className="flex lg:flex-row md:flex-col flex-col py-11 md:py-0 items-center justify-center gap-4">
        <Image src={logo2} width={200} alt="logo" />
        <Image src={logo1} width={300} alt="logo" />
        <Image src={logo3} width={300} alt="logo" />
      </div>
    </section>
  );
}

export default Support;
