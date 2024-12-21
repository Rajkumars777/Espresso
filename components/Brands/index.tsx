import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Brand {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight: string;
}

const brandData: Brand[] = [
  {
    id: 0.25,
    name: "Client",
    href: "#",
    image: "/images/brand/brand-light-01.svg",
    imageLight: "/images/brand/brand-dark-01.svg",
  },
  {
    id: 0.3,
    name: "Client",
    href: "#",
    image: "/images/brand/brand-light-02.svg",
    imageLight: "/images/brand/brand-dark-02.svg",
  },
  {
    id: 0.4,
    name: "Client",
    href: "#",
    image: "/images/brand/brand-light-03.svg",
    imageLight: "/images/brand/brand-dark-03.svg",
  },
  {
    id: 0.5,
    name: "Client",
    href: "#",
    image: "/images/brand/brand-light-04.svg",
    imageLight: "/images/brand/brand-dark-04.svg",
  },
  {
    id: 0.6,
    name: "Client",
    href: "#",
    image: "/images/brand/brand-light-05.svg",
    imageLight: "/images/brand/brand-dark-05.svg",
  },
  {
    id: 0.7,
    name: "Client",
    href: "#",
    image: "/images/brand/brand-light-06.svg",
    imageLight: "/images/brand/brand-dark-06.svg",
  },
];

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <motion.a
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
      transition={{ duration: 1, delay: id }}
      viewport={{ once: true }}
      href={href}
      className="animate_top mx-w-full relative block h-10 w-[98px]"
    >
      <Image
        className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
        src={image}
        alt={name}
        fill
      />
      <Image
        className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
        src={imageLight}
        alt={name}
        fill
      />
    </motion.a>
  );
};

const Brands = () => {
  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
          {brandData.map((brand, key) => (
            <SingleBrand brand={brand} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
