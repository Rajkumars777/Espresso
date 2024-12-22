"use client";
import React, { useState } from "react";
import { Sparkles, Scissors, Music, Camera, Calendar, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import Bookingform from "@/components/Bookingform";

const FashionShowPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const ServiceCard = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-3xl text-fuchsia-600">{icon}</div>
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <Lines />
      <Header />
      <div className="mt-14 from-fuchsia-50 to-pink-100 dark:bg-black">
        <div className="container mx-auto px-4 py-12 dark:bg-black">
          {/* Hero Section */}
          <div className="relative mb-12" style={{ height: "8cm" }}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-75 rounded-2xl"
              style={{ backgroundImage: "url('../images/section0.jpg')" }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-14 text-white">
              <div className="md:w-2/3 space-y-4">
                <h1 className="text-xl font-bold flex items-center">
                  Create Spectacular Fashion Shows
                </h1>
                <p className="text-m">
                  Transform your creative vision into an unforgettable runway experience with our professional fashion show production
                </p>
              </div>
              <button
                onClick={() => setShowBookingForm(!showBookingForm)}
                className="bg-white text-fuchsia-600 px-8 py-3 rounded-full font-semibold hover:bg-fuchsia-50 transition-colors mt-4 md:mt-0 shadow-lg"
              >
                {showBookingForm ? "Close Booking" : "Plan Fashion Show"}
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
              Our Fashion Show Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Runway Production"
                icon={<Sparkles className="text-fuchsia-600" />}
                description="Complete runway design, lighting choreography, and staging for a spectacular fashion presentation experience."
              />
              <ServiceCard
                title="Backstage Management"
                icon={<Scissors className="text-fuchsia-600" />}
                description="Professional styling teams, makeup artists, dressing assistants, and seamless backstage coordination."
              />
              <ServiceCard
                title="Show Direction"
                icon={<Calendar className="text-fuchsia-600" />}
                description="Expert show direction, runway choreography, and precise timing management for flawless presentations."
              />
              <ServiceCard
                title="Music & Sound"
                icon={<Music className="text-fuchsia-600" />}
                description="Custom soundtrack creation, professional sound system setup, and perfect audio-visual synchronization."
              />
              <ServiceCard
                title="Fashion Photography"
                icon={<Camera className="text-fuchsia-600" />}
                description="Professional runway photography, backstage coverage, and high-quality fashion documentation services."
              />
              <ServiceCard
                title="Guest Experience"
                icon={<Users className="text-fuchsia-600" />}
                description="VIP guest management, seating arrangements, and front-row experience coordination for your audience."
              />
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-white dark:bg-black rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-gray-800">Why Choose Us?</h2>
            <blockquote className="text-xl italic dark:text-white text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-fuchsia-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11zm14.017 0v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11z" />
              </svg>
              "We create stunning fashion shows that elevate your brand and showcase your designs with elegance and precision. Our attention to detail ensures every moment on the runway is picture-perfect."
              <svg className="w-10 h-10 text-fuchsia-500 ml-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 3v7.395c0 5.704 3.731 9.57 9.983 10.605l.995-2.151c-2.432-.917-3.995-3.627-3.995-5.849h4v-10h-11zm-14.017 0v7.395c0 5.704 3.731 9.57 9.983 10.605l.995-2.151c-2.432-.917-3.995-3.627-3.995-5.849h4v-10h-11z" />
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

export default FashionShowPage;