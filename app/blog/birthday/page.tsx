"use client";
import React, { useState } from "react";
import { Cake, GemIcon, Music, Camera, CalendarDays, PartyPopper } from "lucide-react"; // Replace with an appropriate icon library
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import Bookingform from "@/components/Bookingform";

const BirthdayEventsPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const ServiceCard = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-3xl text-blue-600">{icon}</div>
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <Lines />
      <Header />
      <div className="mt-14 from-blue-50 to-purple-100 dark:bg-black">
  <div className="container mx-auto px-4 py-12 dark:bg-black">
    {/* Hero Section */}
    <div className="relative mb-12" style={{ height: "8cm" }}>
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 right-0 h-[8cm] bg-cover bg-center opacity-75 rounded-2xl"
        style={{ backgroundImage: "url('../images/section0.jpg')" }}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-14 text-white">
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-xl font-bold flex items-center">
            Plan Unforgettable Birthday Celebrations
          </h1>
          <p className="text-m">
            From creative themes to flawless execution, we make your birthday events magical and memorable.
          </p>
        </div>
        <button
          onClick={() => setShowBookingForm(!showBookingForm)}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mt-4 md:mt-0 shadow-lg"
        >
          {showBookingForm ? "Close Booking" : "Plan Your Birthday"}
        </button>
      </div>
    </div>
  

          {showBookingForm && (
            <div className="mt-8 animate-fadeIn">
              <Bookingform />
            </div>
          )}

          {/* Services Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-10 dark:text-white text-gray-800">
              Our Birthday Event Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Custom Themes"
                icon={<Cake className="text-blue-600" />}
                description="Design personalized themes that reflect your style and make your birthday celebration unique."
              />
              <ServiceCard
                title="Decor and Balloons"
                icon={<GemIcon className="text-blue-600" />}
                description="Create stunning decorations, balloon arrangements, and setups to bring your event to life."
              />
              <ServiceCard
                title="Music & Entertainment"
                icon={<Music className="text-blue-600" />}
                description="Live performances, DJs, and fun activities to keep your guests entertained."
              />
              <ServiceCard
                title="Photography & Videography"
                icon={<Camera className="text-blue-600" />}
                description="Capture every special moment with professional photography and videography services."
              />
              <ServiceCard
                title="Event Planning"
                icon={<CalendarDays className="text-blue-600" />}
                description="Comprehensive event planning to ensure every detail is taken care of seamlessly."
              />
              <ServiceCard
                title="Party Favors"
                icon={<PartyPopper className="text-blue-600" />}
                description="Customized party favors and return gifts that leave a lasting impression on your guests."
              />
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-white dark:bg-black rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-gray-800">Why Choose Us?</h2>
            <blockquote className="text-xl italic dark:text-white text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11zm14.017 0v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c-2.432-.917-3.995-3.627-3.995-5.849h4v-10h11z" />
              </svg>
              "We bring joy, creativity, and precision to every birthday celebration, ensuring a magical and stress-free experience for you and your guests."
              <svg className="w-10 h-10 text-blue-500 ml-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 3v7.395c0 5.704 3.731 9.57 9.983 10.605l.995-2.151c-2.432-.917-3.995-3.627-3.995-5.849h4v-10h-11zm-14.017 0v7.395c0 5.704-3.731 9.57 9.983 10.605l.995-2.151c-2.432-.917-3.995-3.627-3.995-5.849h4v-10h-11z" />
              </svg>
            </blockquote>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default BirthdayEventsPage;
