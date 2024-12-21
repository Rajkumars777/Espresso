"use client";
import React, { useState } from 'react';
import Image from "next/image";

const SingleBlogPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    partyType: '',
    additionalDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    alert('Booking request submitted! We will contact you soon.');
    setShowBookingForm(false);
  };

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section with Booking Button */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 rounded-2xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 text-white">
            <div className="md:w-2/3 space-y-4">
              <h1 className="text-4xl font-bold">Ultimate Birthday Celebration Experience</h1>
              <p className="text-xl">Transform your special day into an unforgettable memory with our comprehensive event management</p>
            </div>
            <button 
              onClick={() => setShowBookingForm(!showBookingForm)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mt-4 md:mt-0 shadow-lg"
            >
              {showBookingForm ? 'Close Booking' : 'Book Your Party'}
            </button>
          </div>
        </div>

        {/* Booking Form */}
        {showBookingForm && (
          <div className="bg-white shadow-2xl rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Party Booking Form</h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Event Date</label>
                <input 
                  type="date" 
                  name="eventDate" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-gray-700">Party Type</label>
                <select 
                  name="partyType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.partyType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Party Type</option>
                  <option value="Kids">Kids Party</option>
                  <option value="Adult">Adult Party</option>
                  <option value="Family">Family Party</option>
                  <option value="Themed">Themed Party</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-gray-700">Additional Details</label>
                <textarea 
                  name="additionalDetails"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any specific requirements or ideas for your party"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2 text-center">
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Birthday Party Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Venue & Setup" 
              icon="🏠"
              description="Custom venue selection and design for memorable celebrations. We create the perfect environment for your party."
            />
            <ServiceCard 
              title="Decoration Magic" 
              icon="🎈"
              description="Stunning themed decorations that transform spaces. From balloons to personalized backdrops, we make your vision come alive."
            />
            <ServiceCard 
              title="Gourmet Catering" 
              icon="🍰"
              description="Delicious, kid-friendly, and adult-approved menu options. Custom cakes, snacks, and beverages that delight all guests."
            />
            <ServiceCard 
              title="Entertainment" 
              icon="🎉"
              description="Engaging performances, games, and activities. From magicians to DJs, we ensure non-stop fun for all ages."
            />
            <ServiceCard 
              title="Photography" 
              icon="📸"
              description="Professional photography and videography to capture every magical moment of your celebration."
            />
            <ServiceCard 
              title="Return Gifts" 
              icon="🎁"
              description="Thoughtful and exciting return gifts that make your guests feel special and remembered."
            />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Us?</h2>
          <blockquote className="text-xl italic text-gray-600 max-w-2xl mx-auto">
            "Our team turns birthday dreams into reality. With meticulous planning, creative designs, and a passion for celebrations, we create experiences that become cherished memories."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;