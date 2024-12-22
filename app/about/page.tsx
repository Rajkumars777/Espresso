"use client";
import React from 'react';
import Link from 'next/link';
import { Calendar, Users, Trophy, Clock, Phone } from 'lucide-react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";

const AboutPage = () => {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <Lines />
      <Header />
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900  transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative bg-blue-600 dark:bg-blue-800  text-white py-24 transition-colors duration-200">
        <div className="container mx-auto mt-20 px-6">
          <h1 className="text-5xl font-bold mb-6">Crafting Unforgettable Experiences</h1>
          <p className="text-xl mb-8 max-w-2xl">We transform your vision into extraordinary events that leave lasting impressions. With our expertise and attention to detail, we create seamless experiences that exceed expectations.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* About Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                With over a decade of experience in event management, we've mastered the art of creating exceptional experiences. Our dedicated team of professionals brings creativity, precision, and passion to every event we handle.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
                From corporate conferences to dream weddings, we handle every detail with meticulous care, ensuring your event is nothing short of perfect.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-colors duration-200">
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</h3>
                <p className="text-gray-600 dark:text-gray-300">Events Managed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-colors duration-200">
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</h3>
                <p className="text-gray-600 dark:text-gray-300">Client Satisfaction</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-colors duration-200">
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</h3>
                <p className="text-gray-600 dark:text-gray-300">Team Members</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-colors duration-200">
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</h3>
                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-xl p-12 text-center transition-colors duration-200">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8">Let's discuss how we can make your next event extraordinary.</p>
          <Link 
            href="/contact"
            className="inline-block bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
    <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};

const services = [
  {
    title: "Corporate Events",
    description: "From conferences to team building activities, we deliver professional events that align with your business objectives.",
    icon: <Trophy className="text-blue-600 dark:text-blue-400 w-6 h-6" />
  },
  {
    title: "Wedding Planning",
    description: "We transform your dream wedding into reality with our comprehensive planning and execution services.",
    icon: <Users className="text-blue-600 dark:text-blue-400 w-6 h-6" />
  },
  {
    title: "Social Gatherings",
    description: "Make your social events memorable with our creative themes and flawless execution.",
    icon: <Calendar className="text-blue-600 dark:text-blue-400 w-6 h-6" />
  }
];

export default AboutPage;