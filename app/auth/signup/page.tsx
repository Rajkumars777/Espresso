"use client";
import Signup from "@/components/Auth/Signup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";


export default function Register() {
  return (
    <>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
      <Signup />
      <Footer />
          <ScrollToTop />
        </ThemeProvider>
    </>
  );
}
