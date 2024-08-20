import { useTranslations } from "next-intl";
import picture1 from "../../../public/images/assets1/Picture4.png";
import picture2 from "../../../public/images/assets1/Picture5.png";
import picture3 from "../../../public/images/assets1/Picture6.png";
import picture4 from "../../../public/images/assets1/Picture7.png";
import picture5 from "../../../public/images/assets1/Picture8.png";
import picture6 from "../../../public/images/assets1/Picture9.png";

const Data = [
  {
    id: 1,
    images: picture1,
    title: "Web Development",
    desc: "Basics of front end development -HTML / Javascript / Phyton",
  },
  {
    id: 2,
    images: picture2,
    title: "User Experience Design",
    desc: "Basics of Design concepts and skills including: Usability, Accessibility, User Interface",
  },
  {
    id: 3,
    images: picture3,
    title: "Information & Frameworks",
    desc: "A structure for the code, including Bulma CSS Framework etc",
  },
  {
    id: 4,
    images: picture4,
    title: "Database & Security",
    desc: "Recognize and prevent common security exploits such as SQL-Injection / XSS etc",
  },
  {
    id: 5,
    images: picture5,
    title: "Soft skills",
    desc: "Problem-solving / Decision-making / Critical Thinking / Global mind-set / Communication as Team",
  },
  {
    id: 6,
    images: picture6,
    title: "Presentation skills",
    desc: "How to Effectively communicate Tech info to non-tech audience",
  },
];

export default Data;
