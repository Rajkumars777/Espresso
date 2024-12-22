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
    mainImage: "/images/services/birthday.jpg",
    title: "BIRTHDAY EVENT",
  },
  {
    path: "Wedding",
    mainImage: "/images/blog/wed.png",
    title: " WEDDING EVENT",
  },
  {
    path: "engagement",
    mainImage: "/images/blog/engage.png",
    title: "ENGAGEMENT CEREMONIES",
  },
  {
    path: "babyshower",
    mainImage: "/images/blog/bs.png",
    title: "BABY SHOWER EVENTS",
  },
  {
    path: "corporate",
    mainImage: "/images/blog/ce.png",
    title: "CORPORATE EVENT",
  },
  {
    path: "schoolevent",
    mainImage: "/images/blog/se.png",
    title: "SCHOOL EVENT",
  },
  {
    path:"cultural",
    mainImage: "/images/services/cultural.jpg",
    title: "CULTURAL EVENT ",
  },
  {
    path: "academic",
    mainImage: "/images/services/academic.jpg",
    title: "ACADEMIC CONFERENCES",
  },
  {
    path: "music",
    mainImage: "/images/services/music.jpg",
    title: "MUSIC AND CONCERT EVENTS",
  },
  {
    path: "fashion",
    mainImage: "/images/services/fashion.jpg",
    title: "FASHION SHOWS",
  },
  {
    path: "startup",
    mainImage: "/images/services/conference.jpg",
    title: "STARTUP & INVESTOR CONFERENCES",
  },
  {
    path: "religious",
    mainImage: "/images/services/tamil.jpg",
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
