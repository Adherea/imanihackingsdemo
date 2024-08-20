import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

type CategoryProps = {
  pic: string | StaticImageData;
  title: string;
  desc: string;
};

const Category: React.FC<CategoryProps> = ({ pic, title, desc }) => {
  const t = useTranslations("content");

  return (
    <div className="text-center">
      <Image width={100} src={pic} alt="pic" className="w-fit mx-auto" />
      <h2>{t(title)}</h2>
      <p>{t(desc)}</p>
    </div>
  );
};

export default Category;
