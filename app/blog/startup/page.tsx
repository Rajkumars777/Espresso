"use client";
import React, { useState } from "react";
import { Briefcase, DollarSign, Globe, BarChart, Users, Lightbulb } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import Bookingform from "@/components/Bookingform";

const StartupConferencePage = () => {
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
      <div className="mt-14 from-blue-50 to-blue-100 dark:bg-black">
        <div className="container mx-auto px-4 py-12 dark:bg-black">
          {/* Hero Section */}
          <div className="relative mb-12" style={{ height: "8cm" }}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-75 rounded-2xl"
              style={{ backgroundImage: "url('../images/startup-conference.jpg')" }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-14 text-white">
              <div className="md:w-2/3 space-y-4">
                <h1 className="text-xl font-bold flex items-center">
                  Empowering Startups & Investors
                </h1>
                <p className="text-m">
                  Join us for a dynamic conference that bridges the gap between groundbreaking startups and visionary investors.
                </p>
              </div>
              <button
                onClick={() => setShowBookingForm(!showBookingForm)}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mt-4 md:mt-0 shadow-lg"
              >
                {showBookingForm ? "Close Booking" : "Book Your Spot"}
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
              Conference Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Startup Pitches"
                icon={<Lightbulb className="text-blue-600" />}
                description="Showcase your innovative ideas to a panel of esteemed investors and industry leaders."
              />
              <ServiceCard
                title="Investor Networking"
                icon={<DollarSign className="text-blue-600" />}
                description="Connect with venture capitalists, angel investors, and funding organizations."
              />
              <ServiceCard
                title="Global Perspectives"
                icon={<Globe className="text-blue-600" />}
                description="Gain insights from international speakers and explore global market opportunities."
              />
              <ServiceCard
                title="Market Trends"
                icon={<BarChart className="text-blue-600" />}
                description="Learn about emerging trends, disruptive technologies, and investment opportunities."
              />
              <ServiceCard
                title="Team Building"
                icon={<Users className="text-blue-600" />}
                description="Participate in collaborative workshops designed to strengthen team synergy."
              />
              <ServiceCard
                title="Business Strategies"
                icon={<Briefcase className="text-blue-600" />}
                description="Discover actionable strategies for scaling and sustaining your startup."
              />
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-white dark:bg-black rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-gray-800">Why Attend?</h2>
            <blockquote className="text-xl italic dark:text-white text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11zm14.017 0v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11z" />
              </svg>
              "Our conference is designed to inspire, educate, and connect. Whether you're a startup founder or an investor, you'll leave with invaluable connections and actionable insights."
              <svg className="w-10 h-10 text-blue-500 ml-4" fill="currentColor" viewBox="0 0 24 24">
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

export default StartupConferencePage;
