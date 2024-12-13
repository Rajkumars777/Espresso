"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const BlogItem = ({ blog }: { blog: typeof BlogData[0] }) => {
  const { mainImage, title, path } = blog;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="relative rounded-md overflow-hidden shadow-md group"
    >
      <Link href={`/blog/${path}`} className="block">
        <div className="relative aspect-[368/239] w-full">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
            <h3 className="text-lg font-semibold mb-1 line-clamp-2">
              {title}
            </h3>
            
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
