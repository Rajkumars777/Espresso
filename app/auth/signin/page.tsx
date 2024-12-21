"use client"; 
import Signin from "@/components/Auth/Signin";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
const SigninPage = () => {
  return (
    <>
      <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
      <Signin />
      <Footer />
          <ScrollToTop />
        </ThemeProvider>
    </>
  );
};

export default SigninPage;
