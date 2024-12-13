import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
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
const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title Start */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `OUR SERVICES`,
              subtitle: `Comprehensive Event Planning & Management`,
              description: `Our expert team handles every detail, ensuring a seamless and unforgettable experience. Let us bring your vision to life with personalized services tailored to your needs.`,
            }}
          />
        </div>
        {/* Section Title End */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 6).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
