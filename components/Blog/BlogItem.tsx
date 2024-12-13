"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const BlogItem = ({ blog }: { blog: typeof BlogData[0] }) => {
  const { mainImage, title, metadata, path } = blog;

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
            <p className="text-xs line-clamp-2 opacity-80">
              {metadata}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
