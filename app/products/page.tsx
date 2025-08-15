"use client";

import { useState } from "react";
import Header from "@/components/landingPage/Header";
import Footer from "@/components/landingPage/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductCategories from "@/components/products/ProductCategories";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import ProductShowcase from "@/components/products/ProductShowcase";
import Newsletter from "@/components/landingPage/Newsletter";

export default function ProductsPage() {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`flex flex-col items-center ${theme} bg-background overflow-x-hidden`}
    >
      <Header theme={theme} setTheme={setTheme} />
      <ProductsHero />
      <ProductCategories />
      <FeaturedProducts />
      <ProductShowcase />
      <Newsletter />
      <Footer />
    </div>
  );
}
