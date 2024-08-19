import React from "react";
import Image, { StaticImageData } from "next/image";

type CategoryProps = {
  pic: string | StaticImageData; // pic bisa berupa string (URL) atau StaticImageData
  title: string;
  desc: string;
};

const Category: React.FC<CategoryProps> = ({ pic, title, desc }) => {
  return (
    <div className="text-center">
      <Image width={100} src={pic} alt="pic" className="w-fit mx-auto" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Category;
