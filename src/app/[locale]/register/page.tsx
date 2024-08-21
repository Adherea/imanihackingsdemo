import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/images/logo.png";

function Page() {
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
      <div className="container mx-auto md:py-10 py-0 px-6">
        <div className="bg-white rounded-md py-6 md:px-24 px-5 md:max-w-6xl mx-auto my-14">
          <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium">Registration</h1>
          <p className="text-center py-3 text-gray-400">By registering, you agree to the terms and conditions of Imani Hacking.</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-8">
            <div className="">
              <div className="flex flex-col">
                <label className="font-semibold" htmlFor="">
                  Fullname
                </label>
                <input className="border rounded-md w-full p-2 mt-3 bg-white" type="text" placeholder="Enter Your Fullname" />
              </div>
              <div className="flex flex-col py-5">
                <label className="font-semibold" htmlFor="">
                  Email
                </label>
                <input className="border rounded-md w-full p-2 mt-3 bg-white" type="text" placeholder="Enter Your Email" />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col ">
                <label className="font-semibold" htmlFor="">
                  Nationality
                </label>
                <input className="border rounded-md w-full p-2 mt-3 bg-white" type="text" placeholder="Enter Your Nationality" />
              </div>
              <div className="flex flex-col py-5">
                <label className="font-semibold" htmlFor="">
                  Phone number
                </label>
                <input className="border rounded-md w-full p-2 mt-3 bg-white" type="text" placeholder="Enter Your number" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <button className="bg-blue-400 rounded-md text-white py-2 w-full my-5">Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
