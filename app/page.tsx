"use client";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Brands /> */}
      <Blog />
      <Feature />
      <About />
      <FunFact />
      <FAQ />
      <CTA />
      <Testimonial />
      <Pricing />
      <Contact />
      
    </main>
  );
}
