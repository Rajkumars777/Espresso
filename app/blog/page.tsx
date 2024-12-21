"use client";
import BlogItem from "@/components/Blog/BlogItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";

const BlogData = [
  {
    path: "birthday",
    mainImage: "/images/blog/bd.png",
    title: "BIRTHDAY EVENT",
  },
  {
    path: "wedding",
    mainImage: "/images/blog/wed.png",
    title: " WEDDING EVENT",
  },
  {
    path: "engage",
    mainImage: "/images/blog/engage.png",
    title: "ENGAGEMENT CEREMONIES",
  },
  {
    path: "",
    mainImage: "/images/blog/bs.png",
    title: "BABY SHOWER EVENTS",
  },
  {
    path: "",
    mainImage: "/images/blog/ce.png",
    title: "CORPORATE EVENT",
  },
  {
    path: "",
    mainImage: "/images/blog/se.png",
    title: "SCHOOL EVENT",
  },
  {
    path:"",
    mainImage: "/images/blog/blog-03.png",
    title: "CULTURAL EVENT ",
  },
  {
    path: "",
    mainImage: "/images/blog/blog-03.png",
    title: "ACADEMIC CONFERENCES",
  },
  {
    path: "",
    mainImage: "/images/blog/blog-04.png",
    title: "MUSIC AND CONCERT EVENTS",
  },
  {
    path: "",
    mainImage: "/images/blog/blog-01.png",
    title: "FASHION SHOWS",
  },
  {
    path: "",
    mainImage: "/images/blog/blog-01.png",
    title: "STARTUP & INVESTOR CONFERENCES",
  },
  {
    path: "",
    mainImage: "/images/blog/blog-01.png",
    title: "RELIGIOUS AND SPIRITUAL EVENTS",
  },
];
const BlogPage = async () => {
  return (
    <>
     <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
      <Footer />
          <ScrollToTop />
        </ThemeProvider>
    </>
  );
};

export default BlogPage;
