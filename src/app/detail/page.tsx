import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo.png";
import picture1 from "../../../public/images/contents/Picture1.jpg";
import picture2 from "../../../public/images/contents/Picture2.jpg";
import picture3 from "../../../public/images/contents/Picture3.jpg";
import training from "../../../public/images/contents/trainings.png";
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
      <div className="px-9">
        <h1 className="text-center text-4xl font-semibold py-10">Contents</h1>

        <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
          <div className="">
            <h1 className="py-5 text-3xl ">Video Learning Session </h1>
            <p className="max-w-xl">Students can select video courses corresponding to their current levels.</p>
          </div>

          <div className="max-w-xl">
            <Image src={picture1} alt="image" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex md:flex-col-reverse py-7 lg:flex-row flex-col-reverse items-center justify-between">
          <div className="">
            <h1 className="py-5 text-3xl ">Mentoring Session </h1>
            <p className="max-w-xl">Students meet with mentors to ask questions about the course content and receive guidance on their future plans.</p>
          </div>

          <div className="max-w-xl">
            <Image src={picture2} alt="image" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex md:flex-col-reverse lg:flex-row flex-col-reverse items-center justify-between">
          <div className="">
            <h1 className="py-5 text-3xl ">Lesson Sessions </h1>
            <p className="max-w-xl">Students enrolled in the same course participate in thematic online sessions covering topics such as technology, soft skills, projects, and engage in group discussions.</p>
          </div>

          <div className="max-w-xl">
            <Image src={picture3} alt="image" />
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto py-20 px-8">
        <h1 className="text-center text-4xl py-16">Our Training process</h1>
        <Image src={training} alt="training.png" width={900} />

        <h1 className="py-24 text-center text-4xl font-semibold">Our updated schedule :</h1>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                No
              </th>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                Date
              </th>
              <th scope="col" className="border border-gray-300 px-4 py-2">
                Agenda
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                1.
              </th>
              <td className="border border-gray-300 px-4 py-2">20th, 21st, 24th, 26th April</td>
              <td className="border border-gray-300 px-4 py-2">Screening</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                2.
              </th>
              <td className="border border-gray-300 px-4 py-2">1st May ~ 21th May</td>
              <td className="border border-gray-300 px-4 py-2">Choose Students</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                3.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                22th May ~ 28th May
              </td>
              <td className="border border-gray-300 px-4 py-2">First Payment</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                4.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                1st June ~ 4th June
              </td>
              <td>
                Decide which course and make a group / <br /> Allocate each mentor / <br /> Distribute and Sign Enrollment Agreement
              </td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                5.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                Start from 12th June
              </td>
              <td className="border border-gray-300 px-4 py-2">the student start to learn from video courses.</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                6.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                17th July
              </td>
              <td className="border border-gray-300 px-4 py-2">Start developing a real software by each group</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                7.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                7th August
              </td>
              <td className="border border-gray-300 px-4 py-2">Start preparing a presentation by each team.</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                8.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                14th August
              </td>
              <td className="border border-gray-300 px-4 py-2">Prepare a presentation by each team.</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                9.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                27th August
              </td>
              <td className="border border-gray-300 px-4 py-2">Final Presentation by students</td>
            </tr>
            <tr>
              <th scope="row" className="border border-gray-300 px-4 py-2">
                10.
              </th>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                End of August
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Giving a certification / <br />
                disscuss to join the real project as a freelancer.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default page;
