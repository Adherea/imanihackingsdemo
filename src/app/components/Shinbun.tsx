import Image, { StaticImageData } from "next/image";
import React from "react";

// Menambahkan tipe untuk properti yang diterima oleh komponen Shinbun
type ShinbunProps = {
  images: string | StaticImageData; // images bisa berupa string URL atau StaticImageData
  title: string;
  desc: string;
};

const Shinbun: React.FC<ShinbunProps> = ({ images, title, desc }) => {
  return (
    <section>
      <div className="">
        <div className="w-fit mx-auto">
          <Image src={images} alt={`${title}.jpg`} />
        </div>
        <h1 className="text-3xl py-5">{title}</h1>
        <p className="">{desc}</p>
      </div>
    </section>
  );
};

export default Shinbun;
