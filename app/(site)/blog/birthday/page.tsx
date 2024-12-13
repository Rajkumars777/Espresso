"use client";
import React, { useState } from 'react';
import { Metadata } from "next";
import Image from "next/image";



const SingleBlogPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    eventLocation: '',
    services: {
      partyFavors: false,
      photography: false,
      invitationDesign: false,
      characterCostumes: false,
      partyPlanning: false
    },
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name.startsWith('services.')) {
      const serviceKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [serviceKey]: checked
        }
      }));
    } else if (name === 'termsAccepted') {
      setFormData(prev => ({
        ...prev,
        termsAccepted: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    // Submit form logic here
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully!');
  };

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Book Now Button */}
          <div className="mb-10 text-center">
            <button 
              onClick={() => setShowBookingForm(!showBookingForm)}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              {showBookingForm ? 'Close Booking Form' : 'Book Your Birthday Event'}
            </button>
          </div>

          {/* Booking Form */}
          {showBookingForm && (
            <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6 text-center">Birthday Event Booking Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-primary"
                      placeholder="Your Full Name"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-primary"
                      placeholder="Your Contact Number"
                      required 
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold">Your Location</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-primary"
                      placeholder="Your City/Area"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Event Location</label>
                    <input 
                      type="text" 
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-primary"
                      placeholder="Venue for Birthday Event"
                      required 
                    />
                  </div>
                </div>

                {/* Services Selection */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Select Event Services</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { key: 'partyFavors', label: 'Party Favors' },
                      { key: 'photography', label: 'Photography' },
                      { key: 'invitationDesign', label: 'Invitation Design' },
                      { key: 'characterCostumes', label: 'Character Costume Rentals' },
                      { key: 'partyPlanning', label: 'Party Planning Consultation' }
                    ].map(service => (
                      <div key={service.key} className="flex items-center">
                        <input 
                          type="checkbox" 
                          name={`services.${service.key}`}
                          checked={formData.services[service.key]}
                          onChange={handleInputChange}
                          className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                        />
                        <label>{service.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center">
                  <input 
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-primary focus:ring-primary"
                    required
                  />
                  <label className="text-sm">
                    I agree to the Terms and Conditions of the Event Management Service
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Submit Booking
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Rest of the existing blog content */}
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            {/* ... (rest of the existing code remains the same) */}
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/bd.png"}
                      alt="Birthday Celebration"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Unforgettable Birthday Celebrations by Our Event Management Team
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>Event Management Team
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: December 13, 2024
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Birthday Events
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Welcome to our premier birthday event management service! 
                    We specialize in creating magical and memorable birthday 
                    celebrations tailored to your unique vision and requirements.
                  </p>

                  <p>
                    Our experienced team handles every detail with precision and 
                    creativity, ensuring that your special day is nothing short 
                    of extraordinary. From intimate family gatherings to 
                    spectacular themed parties, we bring your birthday dreams to life.
                  </p>

                  {/* Rest of the blog content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;

