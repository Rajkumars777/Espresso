import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
const BlogData = [
  {
    path: "birthday", // Path set as number
    mainImage: "/images/blog/bd.png",
    title: "BirthDay Event",
    metadata: "Details about Birthday Event",
  },
  {
    path: 2,
    mainImage: "/images/blog/blog-02.png",
    title: "Wedding Event",
    metadata: "Details about Wedding Event",
  },
  {
    path: 3,
    mainImage: "/images/blog/blog-03.png",
    title: "Engagement Event",
    metadata: "Details about Engagement Event",
  },
  {
    path: 4,
    mainImage: "/images/blog/blog-03.png",
    title: "Baby Shower Event",
    metadata: "Details about Baby Shower Event",
  },
  {
    path: 5,
    mainImage: "/images/blog/blog-04.png",
    title: "Event05",
    metadata: "Details about Event05",
  },
  {
    path: 6,
    mainImage: "/images/blog/blog-01.png",
    title: "Event06",
    metadata: "Details about Event06",
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
