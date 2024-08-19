import Image, { StaticImageData } from "next/image";
import React from "react";

// Tambahkan tipe untuk properti yang diterima komponen
type InstructorsProps = {
  images: string | StaticImageData; // Gambar bisa berupa string URL atau StaticImageData
  name: string;
  special: string;
  desc: string;
};

const Instructors: React.FC<InstructorsProps> = ({ images, name, special, desc }) => {
  return (
    <section className="">
      <div className="bg-[#58BBFF] rounded-2xl py-10">
        <Image
          className="w-fit mx-auto rounded-full border-4  border-white"
          src={images}
          width={100}
          alt={`${name}.jpg`} // alt disesuaikan dengan nama instruktur
        />
      </div>
      <div className="bg-white rounded-2xl py-5 px-6 -mt-3">
        <h1 className="text-center text-3xl">{name}</h1>
        <h4 className="text-center py-5">
          <span className="font-semibold">Specialization:</span> {special}
        </h4>
        <p className="text-center">{desc}</p>
        <div className="mx-auto w-fit py-7">
          <button className="bg-[#58BBFF] text-white rounded-full py-1 px-5">Visit Me</button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
