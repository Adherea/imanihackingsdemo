"use client";
import { useTranslations } from "next-intl";
import About from "../components/About";
import Content from "../components/Content";
import Country from "../components/Country";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Teach from "../components/Teach";
export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Content />
        <Teach />
        <Country />
        <News />
      </div>
    </section>
  );
}
