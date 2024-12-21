import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Section Header Component
const SectionHeader = ({ headerInfo }: { headerInfo: { title: string; subtitle: string; description: string } }) => {
  return (
    <div className="text-center">
      <span className="text-sm font-medium uppercase text-primary">{headerInfo.subtitle}</span>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
        {headerInfo.title}
      </h2>
      <p className="mt-4 text-base text-gray-500 dark:text-gray-300">{headerInfo.description}</p>
    </div>
  );
};

// Single Feature Component with Framer Motion
const SingleFeature = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
        <Image src={icon} width={36} height={36} alt={title} />
      </div>
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

// Main Feature Component
const Feature = () => {
  return (
    <>
      {/* ===== Features Section Start ===== */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Header */}
          <SectionHeader
            headerInfo={{
              title: "FEATURES",
              subtitle: "Core Features of Our Event Services",
              description: `Making every celebration smooth, stunning, and stress-free, ensuring your special moments are unforgettable and perfectly executed`,
            }}
          />
          {/* Features Grid */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* Feature Cards with Inline Data */}
            <SingleFeature
              icon="/images/icon/icon-01.svg"
              title="Complete Event Planning"
              description="From start to finish, we handle everything seamlessly."
            />
            <SingleFeature
              icon="/images/icon/icon-02.svg"
              title="Weddings & Celebrations"
              description="ailored for weddings, birthdays, and milestones."
            />
            <SingleFeature
              icon="/images/icon/icon-03.svg"
              title="Elegant Design & Decor"
              description="High-quality themes that impress."
            />
            <SingleFeature
              icon="/images/icon/icon-04.svg"
              title="Transparent Pricing"
              description="Fixed packages, no hidden costs."
            />
            <SingleFeature
              icon="/images/icon/icon-06.svg"
              title="Reliable Support"
              description="Quality checks and 24/7 assistance."
            />
            <SingleFeature
              icon="/images/icon/icon-05.svg"
              title="Trendy Offerings"
              description=" Fresh ideas to make your event stand out."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
