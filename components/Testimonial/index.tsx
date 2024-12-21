"use client";
import SectionHeader from "../Common/SectionHeader";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Bride @SarahWedsMark",
    image: "/images/user/user-01.png",
    content:
      "The team made our wedding day absolutely magical. From the decor to the seamless coordination, everything was handled perfectly. We didn’t have to worry about a thing!",
  },
  {
    id: 2,
    name: "Mark Roberts",
    designation: "Groom @MarkWedsSarah",
    image: "/images/user/user-02.png",
    content:
      "I can’t thank the team enough for organizing the perfect wedding. The attention to detail was impeccable, and they took care of everything, making it the most stress-free event of our lives.",
  },
  {
    id: 3,
    name: "Jessica Williams",
    designation: "Event Manager @EventX",
    image: "/images/user/user-01.png",
    content:
      "We partnered with this event management company for our corporate gala, and they exceeded all expectations. The planning, logistics, and execution were flawless. Highly recommend!",
  },
  {
    id: 4,
    name: "Michael Davis",
    designation: "CEO @DavisCorporation",
    image: "/images/user/user-02.png",
    content:
      "From the venue selection to the event day coordination, everything was perfect. Their team’s professionalism and dedication were outstanding, making our annual conference a success.",
  },
];

const SingleTestimonial = ({ review }: { review: any }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <Image width={60} height={50} className="" src={image} alt={name} />
      </div>

      <p>{content}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `Client’s Testimonials`,
                description: `Our clients' feedback speaks volumes about our commitment to creating unforgettable events. Here’s what they have to say about us.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

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
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
