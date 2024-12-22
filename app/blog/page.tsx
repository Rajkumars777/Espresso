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
    path: "cultural",
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
      <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
        <Lines />
        <Header />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          {/* Hero Section */}
          <div className="relative bg-blue-600 dark:bg-blue-800 text-white py-24 transition-colors duration-200">
  <div className="container mt-12 mx-auto px-6">
    <h1 className="text-5xl font-bold mb-6">Discover Our Premium Event Services</h1>
    <p className="text-xl mb-8 max-w-2xl">
      We specialize in curating unique and unforgettable events tailored to your needs. From grand celebrations to intimate gatherings, our services encompass everything to make your special moments extraordinary. Let us bring your vision to life with creativity, precision, and a touch of elegance.
    </p>
  </div>
</div>

          {/* Blog Grid */}
          <section className="py-10 lg:py-15 xl:py-20">
            <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
              <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {BlogData.map((post, key) => (
                  <BlogItem key={key} blog={post} />
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
};

export default BlogPage;
