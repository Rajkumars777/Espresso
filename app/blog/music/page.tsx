"use client";
import React, { useState } from "react";
import { Music, Mic, Speaker, Camera, Calendar, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import Bookingform from "@/components/Bookingform";

const MusicEventPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const ServiceCard = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-3xl text-purple-600">{icon}</div>
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <Lines />
      <Header />
      <div className="mt-14 from-purple-50 to-violet-100 dark:bg-black">
        <div className="container mx-auto px-4 py-12 dark:bg-black">
          {/* Hero Section */}
          <div className="relative mb-12" style={{ height: "8cm" }}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-75 rounded-2xl"
              style={{ backgroundImage: "url('../images/section0.jpg')" }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-14 text-white">
              <div className="md:w-2/3 space-y-4">
                <h1 className="text-4xl font-bold flex items-center">
                  Create Unforgettable Musical Experiences
                </h1>
                <p className="text-xl">
                  From intimate concerts to major music festivals, we bring your musical vision to life with professional event management
                </p>
              </div>
              <button
                onClick={() => setShowBookingForm(!showBookingForm)}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors mt-4 md:mt-0 shadow-lg"
              >
                {showBookingForm ? "Close Booking" : "Plan Music Event"}
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
              Our Music Event Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Concert Production"
                icon={<Music className="text-purple-600" />}
                description="Full-scale concert production including stage design, lighting choreography, and visual effects for an immersive experience."
              />
              <ServiceCard
                title="Sound Engineering"
                icon={<Speaker className="text-purple-600" />}
                description="Professional sound system setup, acoustic optimization, and live sound mixing for perfect audio quality."
              />
              <ServiceCard
                title="Performance Planning"
                icon={<Calendar className="text-purple-600" />}
                description="Comprehensive event scheduling, artist coordination, and showtime management for seamless performances."
              />
              <ServiceCard
                title="Artist Management"
                icon={<Mic className="text-purple-600" />}
                description="Complete artist liaison services, backstage management, and technical rider fulfillment for performers."
              />
              <ServiceCard
                title="Event Coverage"
                icon={<Camera className="text-purple-600" />}
                description="Professional photography and videography services capturing the energy and excitement of live performances."
              />
              <ServiceCard
                title="Audience Experience"
                icon={<Users className="text-purple-600" />}
                description="Crowd management, VIP services, merchandise coordination, and enhanced fan experiences at your music event."
              />
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-white dark:bg-black rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-gray-800">Why Choose Us?</h2>
            <blockquote className="text-xl italic dark:text-white text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-purple-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11zm14.017 0v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11z" />
              </svg>
              "We blend technical expertise with creative vision to deliver exceptional music events that resonate with audiences. From sound quality to stage design, we ensure every detail creates an unforgettable live music experience."
              <svg className="w-10 h-10 text-purple-500 ml-4" fill="currentColor" viewBox="0 0 24 24">
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

export default MusicEventPage;