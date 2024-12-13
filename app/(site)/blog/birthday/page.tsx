'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const SingleBlogPage = async () =>  {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    eventLocation: '',
    services: {
      partyFavors: false,
      photography: false,
      invitationDesign: false,
      characterCostumes: false,
      partyPlanning: false
    },
    additionalDetails: '',
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
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    // Here you would typically send the form data to a backend
    console.log('Booking Submitted:', formData);
    alert('Booking submitted successfully!');
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Book Now Button */}
          <div className="mb-10 flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg rounded-lg transition-colors duration-300"
            >
              Book Your Birthday Event Now!
            </button>
          </div>

          {/* Event Details */}
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="rounded-md border border-gray-200 bg-white p-7.5 shadow-lg dark:border-gray-700 dark:bg-gray-800 md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/birthday-event.png"}
                      alt="Birthday Celebration Event"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-gray-900 dark:text-white 2xl:text-4xl">
                  Unforgettable Birthday Celebrations by Our Event Management Experts
                </h2>

                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Elevate your birthday celebration with our comprehensive event management services. 
                    We specialize in creating magical, memorable experiences that will be cherished for years to come.
                  </p>

                  <h3 className="text-2xl font-semibold pt-4 text-gray-800 dark:text-white">
                    Our Birthday Event Packages Include:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Customized Theme Design</li>
                    <li>Professional Event Coordination</li>
                    <li>Venue Selection and Decoration</li>
                    <li>Entertainment and Activities</li>
                    <li>Catering and Cake Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Book Your Birthday Event
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder="Your Full Name" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    placeholder="Your Contact Number" 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Services Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Select Birthday Services
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(formData.services).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        id={key}
                        name={`services.${key}`}
                        checked={value}
                        onChange={handleInputChange}
                        className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <label 
                        htmlFor={key}
                        className="text-sm text-gray-700 dark:text-gray-300 capitalize"
                      >
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  required
                  className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                />
                <label 
                  htmlFor="terms"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  I agree to the Terms and Conditions
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlogPage;