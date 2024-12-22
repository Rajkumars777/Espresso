import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
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

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className="py-0 lg:py-0 xl:py-0">
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
            {(showAll ? BlogData : BlogData.slice(0, 6)).map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
