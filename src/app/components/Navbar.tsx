import { useState, useRef, useEffect, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function Navbar() {
  const t = useTranslations("navbar");
  const [navbar, setNavbar] = useState(true);
  const [contactPopup, setContactPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    setSelectedLanguage(nextLocale);
    localStorage.setItem("preferredLanguage", nextLocale);

    const pathWithoutLocale = pathname.split("/").slice(2).join("/");
    router.replace(`/${nextLocale}/${pathWithoutLocale}`);
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("preferredLanguage") || "en";
    setSelectedLanguage(savedLocale);

    const currentLocale = pathname.split("/")[1];
    if (currentLocale !== savedLocale) {
      router.replace(`/${savedLocale}${pathname.split("/").slice(2).join("/")}`);
    }
  }, [pathname]);

  const toggleNavbar = () => {
    setNavbar((prevState) => !prevState);
  };

  const toggleContactPopup = () => {
    setContactPopup((prevState) => !prevState);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_ywze8t3", // Ganti dengan Service ID
          "template_a9xuyc4", // Ganti dengan Template ID
          formRef.current,
          "Vcei92itv2gfb6GLz" // Ganti dengan User ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
            toggleContactPopup();
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the message, please try again.");
          }
        );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbar(true);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && !navbar) {
        setNavbar(true);
      }
      if (!contactPopup) {
        setContactPopup(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navbar, contactPopup]);

  return (
    <nav className="flex items-center text-white justify-between md:px-12 px-5 text-xl bg-gradient-to-l from-[#7DAAB6] via-[#8EB7C4] to-[#82B3C5]">
      <div>
        <Image src={logo} width={140} alt="logo" />
      </div>

      <div ref={menuRef} className="relative flex items-center list-none gap-5">
        <ul className="md:flex gap-4 hidden">
          <li>
            <a href={"#about"} className="group relative custom-link">
              {t("About")}
            </a>
          </li>
          <li>
            <a href={"#countries"} className="group relative custom-link">
              {t("Countries")}
            </a>
          </li>
          <li className="relative group">
            <a href={"#services"} className="relative custom-link">
              {t("Services")}
            </a>
            <Link href={`/${selectedLanguage}/course`} className="absolute left-0 text-xs w-[8vw] hidden group-hover:block bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded z-10">
              {t("Company")}
            </Link>
          </li>
          <li>
            <a href={"#news"} className="group relative custom-link">
              {t("News")}
            </a>
          </li>
          <li>
            <a href={`/${selectedLanguage}/members`} className="group relative custom-link">
              {t("Members")}
            </a>
          </li>
          <li className="md:hidden xl:block block">
            <button onClick={toggleContactPopup} className="group relative custom-link">
              {t("Contact")}
            </button>
          </li>
        </ul>

        {!navbar && (
          <div className="overlay" onClick={toggleNavbar}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <FontAwesomeIcon icon={faXmark} width={20} className={`popup-close`} onClick={toggleNavbar} />
              <ul className="flex flex-col items-center gap-4">
                <li>
                  <a href={"#about"} className="group relative custom-link">
                    {t("About")}
                  </a>
                </li>
                <li>
                  <a href={"#countries"} className="group relative custom-link">
                    {t("Countries")}
                  </a>
                </li>
                <li>
                  <a href={"#services"} className="group relative custom-link">
                    {t("Services")}
                  </a>
                </li>
                <li>
                  <a href={"#news"} className="group relative custom-link">
                    {t("News")}
                  </a>
                </li>
                <li>
                  <a href={`/${selectedLanguage}/members`} className="group relative custom-link">
                    {t("Members")}
                  </a>
                </li>
                <li className="md:hidden xl:block block">
                  <button onClick={toggleContactPopup} className="group relative custom-link">
                    {t("Contact")}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div>
        <select className="text-[#000080] bg-transparent rounded-md border border-[#000080] py-1 px-2" onChange={selectChange} value={selectedLanguage}>
          <option value="en">English</option>
          <option value="ja">Japanese</option>
        </select>
      </div>

      <div className="md:hidden static" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={!navbar ? faXmark : faBars} className={`${!navbar ? "hidden" : "static"} `} width={30} />
      </div>

      {contactPopup && (
        <div className="overlay" onClick={toggleContactPopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon icon={faXmark} width={20} className={`popup-close`} onClick={toggleContactPopup} />
            <h2>Contact Us</h2>
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="to_name" className="form-input" placeholder="Name" required />
              <input type="email" name="from_name" className="form-input" placeholder="Email" required />
              <textarea name="message" className="form-input" placeholder="Message" required></textarea>
              <button type="submit" className="form-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
