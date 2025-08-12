"use client";

import Banner from "@/components/landingPage/Banner";
import Header from "@/components/landingPage/Header";
import HeroSection from "@/components/landingPage/HeroSection";
import Services from "@/components/landingPage/Services";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
import About from "@/components/landingPage/About";
import Testimonials from "@/components/landingPage/Testimonials";
import FAQ from "@/components/landingPage/FAQ";
import Newsletter from "@/components/landingPage/Newsletter";
import Contact from "@/components/landingPage/Contact";
import Footer from "@/components/landingPage/Footer";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  return (
    <div
      className={`flex flex-col items-center ${theme} bg-background overflow-x-hidden`}
    >
      <Header theme={theme} setTheme={setTheme} />
      <HeroSection />
      <Banner />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
