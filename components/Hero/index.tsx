import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const Hero = () => {
  const [dynamicWord, setDynamicWord] = useState("Unforgettable");
  const dynamicWords = [
    "Amazing",
    "Super",
    "Incredible",
    "Unforgettable",
    "Magical",
    "Extraordinary",
    "Breathtaking",
    "Epic",
    "Spectacular",
    "Phenomenal",
    "Stunning",
    "Remarkable",
  ];

  useEffect(() => {
    let wordIndex = 0;
    const wordInterval = setInterval(() => {
      setDynamicWord(dynamicWords[wordIndex]);
      wordIndex = (wordIndex + 1) % dynamicWords.length;
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(wordInterval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    // Ensure the background image is reloaded when the component mounts
    const image = new Image();
    image.src = "./images/section0.jpg"; // Preload the background image
  }, []); // Empty dependency array to ensure it runs once on mount

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  useEffect(() => {
    const handleFocus = () => {
      const image = new Image();
      image.src = "./images/section0.jpg"; // Reload the background image when the page is focused
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden h-screen flex items-center"
      style={{
        backgroundImage: "url('./images/section0.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative z-10">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white dark:text-white leading-tight 
              bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
            >
              <motion.div variants={lineVariants} className="mb-4">
                Your Dream, Our Expertise
              </motion.div>
              <motion.div variants={lineVariants} className="mb-4">
                Making Moments
              </motion.div>
              <motion.div variants={lineVariants} className="mb-4">
                <span className="text-gradient">{dynamicWord}!</span>
              </motion.div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.5,
                  duration: 0.8,
                  ease: "easeOut",
                },
              }}
              className="mt-28 flex justify-center"
            >
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex flex-wrap gap-5 justify-center">
                  <Link
                    href="/#features"
                  >
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-btndark dark:hover:bg-white dark:hover:text-black"
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
