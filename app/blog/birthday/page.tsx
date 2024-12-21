"use client";
import React, { useState } from "react";
import { send } from "emailjs-com";
import { AlertCircle, Cake, Gift, Star } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Toaster, toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';
export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      containerStyle={{
        inset: 0,
        top: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}
const SingleBlogPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    partyType: "",
    guestCount: "",
    ageGroup: "",
    theme: "",
    cakeType: "",
    additionalDetails: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showCelebrationToast = (message) => {
    // Trigger confetti effect
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    const randomInRange = (min, max) => Math.random() * (max - min) + min;
  
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  
    // Show enhanced toast
    toast.custom(
      (t) => (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 mx-4`}
          
          >
            <div className="flex-1 w-0 p-6">
              <div className="flex items-start justify-center">
                <div className="flex-1 text-center">
                  <p className="text-xl font-medium text-white">
                    🎉 Success!
                  </p>
                  <p className="mt-2 text-lg text-white">
                    {message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-6 flex items-center justify-center text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: 'top-center'
      }
    );
  };
  
  // Updated submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.termsAccepted) {
      alert("Please accept the Terms and Conditions");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await send(
        "service_xjdcckf", // Service ID
        "template_0r19lnx", // Template ID
        formData,
        "T6excnRhZyRg087uw" // Public Key
      );
  
      console.log("SUCCESS!", response.status, response.text);
      showCelebrationToast(
        "Thanks for submitting your booking request. We will get back to you shortly."
      );
      setLoading(false);
      setShowBookingForm(false);
    } catch (err) {
      console.log("FAILED...", err);
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
    }
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
  const closeModal = () => {
    setTermsModalOpen(false);
  };

  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <Lines />
      <Header />
      <div className="mt-14 from-blue-50 to-purple-100 dark:bg-black">
        <div className="container mx-auto px-4 py-12 dark:bg-black">
        <ToastProvider />
          <div className="relative mb-12" style={{ height: "8cm" }}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-75 rounded-2xl"
              style={{ backgroundImage: "url('../images/section0.jpg')" }}
            ></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 text-white">
              <div className="md:w-2/3 space-y-4">
                <h1 className="text-4xl font-bold flex items-center">
                  Ultimate Birthday Celebration Experience
                </h1>
                <p className="text-xl">
                  Transform your special day into an unforgettable memory with our
                  comprehensive event management
                </p>
              </div>
              <button
                onClick={() => setShowBookingForm(!showBookingForm)}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors mt-4 md:mt-0 shadow-lg"
              >
                {showBookingForm ? "Close Booking" : "Book Your Party"}
              </button>
            </div>
          </div>

          {showBookingForm && (
            <div className="bg-white shadow-2xl rounded-2xl p-8 mb-12 dark:bg-black dark:text-white">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                <Cake className="inline-block mr-3 text-pink-500 " />
                Party Booking Form
              </h2>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 dark:text-white text-gray-700">
                    Full Name
                  </label>
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
                  <label className="block mb-2 dark:text-white text-gray-700">
                    Email Address
                  </label>
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
                  <label className="block mb-2 dark:text-white text-gray-700">
                    Phone Number
                  </label>
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
                  <label className="block mb-2 dark:text-white text-gray-700">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 dark:text-white text-gray-700">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Total Number of Guests"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 dark:text-white text-gray-700">
                    Age Group
                  </label>
                  <select
                    name="ageGroup"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.ageGroup}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Age Group</option>
                    <option value="0-5">0-5 Years</option>
                    <option value="6-12">6-12 Years</option>
                    <option value="13-18">13-18 Years</option>
                    <option value="19+">19+ Years</option>
                  </select>
                </div>
                <div>
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
                <div>
                  <label className="block mb-2 text-gray-700">Party Theme</label>
                  <select
                    name="theme"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.theme}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Theme</option>
                    <option value="Superhero">Superhero</option>
                    <option value="Princess">Princess</option>
                    <option value="Dinosaur">Dinosaur</option>
                    <option value="Unicorn">Unicorn</option>
                    <option value="Space">Space</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Cake Type</label>
                  <select
                    name="cakeType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.cakeType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Cake Type</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="Red Velvet">Red Velvet</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-gray-700">Additional Details</label>
                  <textarea
                    name="additionalDetails"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any specific requests or details"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    name="termsAccepted"
                    className="mr-2"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="terms" className="text-gray-700">
                    I accept the
                    <span
                      className="text-blue-600 cursor-pointer"
                      onClick={() => setTermsModalOpen(true)}
                    >
                      Terms and Conditions
                    </span>
                  </label>
                </div>
                <div className="md:col-span-2">
                  <button
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Booking"}
                  </button>
                </div>
              </form>
            </div>
          )}
          {termsModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3">
      <h1 className="text-xl font-semibold mb-4">Terms and Conditions</h1>
      <div className="text-sm space-y-4">
        <section>
          <p className="mb-2">
            <strong>1. Service Engagement</strong><br />
            Customers must provide accurate, complete, and timely event details to ensure the services meet their expectations. Customers are responsible for:
          </p>
          <ul className="list-disc pl-6">
            <li>Making payments as per the agreed schedule</li>
            <li>Providing timely responses to communication and requests for information</li>
            <li>Ensuring access to venues and other logistical requirements necessary for event planning</li>
          </ul>
        </section>

        <section>
          <p className="mb-2">
            <strong>2. Event Booking and Confirmation</strong><br />
            To book an event, customers must:
          </p>
          <ul className="list-disc pl-6">
            <li>Provide detailed event requirements, including dates, venue, and services needed</li>
            <li>Pay a non-refundable booking deposit to confirm the event</li>
            <li>Receive a comprehensive event proposal with all agreed details</li>
          </ul>
          <p>The event will be confirmed after full payment is received, and the event plan is finalized.</p>
        </section>

        <section>
          <p className="mb-2">
            <strong>3. Event Modifications and Cancellations</strong><br />
            Customers may modify their event details up to <strong>10 days</strong> before the event without incurring significant charges. Major changes may result in additional fees. Cancellation fees are as follows:
          </p>
          <ul className="list-disc pl-6">
            <li>15-30 days before the event: 20% of the total event cost</li>
            <li>Less than 15 days before the event: 40% of the total event cost</li>
            <li>Less than 7 days before the event: 50% of the total event cost</li>
          </ul>
        </section>

        <section>
          <p className="mb-2">
            <strong>4. Service Guarantees</strong><br />
            The organization guarantees:
          </p>
          <ul className="list-disc pl-6">
            <li>High-quality, professional services for every event</li>
            <li>Timely execution of event plans</li>
            <li>Transparent communication with clients throughout the planning and execution process</li>
            <li>Availability of a customer support team to resolve any issues that arise before or during the event</li>
          </ul>
        </section>

        <section>
          <p className="mb-2">
            <strong>5. Liability and Limitations</strong><br />
            The organization is not liable for any damages, delays, or failures caused by unforeseen circumstances, including but not limited to force majeure events (natural disasters, strikes, etc.). In the event of a service issue, the organization will provide a suitable remedy, either through:
          </p>
          <ul className="list-disc pl-6">
            <li>Refunds</li>
            <li>Alternative services or compensation</li>
          </ul>
        </section>
      </div>
      <button
        onClick={closeModal}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  </div>
)}

          {/* Services Grid */}
          <div className="mb-12 ">
            <h2 className="text-3xl font-bold text-center mb-10 dark:text-white text-gray-800 ">Our Birthday Party Services</h2>
            <div className="grid md:grid-cols-3 gap-6 ">
              <ServiceCard
                title="Venue & Setup"
                icon={<Gift className="text-blue-600 " />}
                description="Custom venue selection and design for memorable celebrations. We create the perfect environment for your party."
              />
              <ServiceCard
                title="Decoration Magic"
                icon={<Cake className="text-pink-600" />}
                description="Stunning themed decorations that transform spaces. From balloons to personalized backdrops, we make your vision come alive."
              />
              <ServiceCard
                title="Gourmet Catering"
                icon={<Cake className="text-yellow-600" />}
                description="Delicious, kid-friendly, and adult-approved menu options. Custom cakes, snacks, and beverages that delight all guests."
              />
              <ServiceCard
                title="Entertainment"
                icon={<AlertCircle className="text-green-600" />}
                description="Engaging performances, games, and activities. From magicians to DJs, we ensure non-stop fun for all ages."
              />
              <ServiceCard
                title="Photography"
                icon={<Star className="text-purple-600" />}
                description="Professional photography and videography to capture every magical moment of your celebration."
              />
              <ServiceCard
                title="Return Gifts"
                icon={<Gift className="text-red-600" />}
                description="Thoughtful and exciting return gifts that make your guests feel special and remembered."
              />
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-white dark:bg-black rounded-2xl p-10 text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-gray-800">Why Choose Us?</h2>
            <blockquote className="text-xl italic dark:text-white text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11zm14.017 0v7.395c0 5.704-3.731 9.57-9.983 10.605l-.995-2.151c2.432-.917 3.995-3.627 3.995-5.849h-4v-10h11z" />
              </svg>
              "Our team turns birthday dreams into reality. With meticulous planning, creative designs, and a passion for celebrations, we create experiences that become cherished memories."
              <svg className="w-10 h-10 text-blue-500 ml-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 3v7.395c0 5.704 3.731 9.57 9.983 10.605l.995-2.151c-2.432-.917-3.995-3.627-3.995-5.849h4v-10h-11zm-14.017 0v7.395c0 5.704 3.731 9.57 9.983 10.605l.995-2.151c-2.432-.917-3.995-3.627-3.995-5.849h4v-10h-11z" />
              </svg>
            </blockquote>
          </div>

          {/* Price Packages Section */}
          <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            </div>

            <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">

              <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    $10{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      /month
                    </span>
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Small Pack
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        300 GB Storage
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Unlimited Photos and Videos
                      </li>
                      <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                        Exclusive Support
                      </li>
                      <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                        Custom Branding Strategy
                      </li>
                    </ul>
                  </div>

                  <button
                    aria-label="Get the Plan button"
                    className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                  >
                    <span className="duration-300 group-hover/btn:pr-2">
                      Get the Plan
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                    popular
                  </div>

                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    $59{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      /month
                    </span>
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Medium Pack
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        300 GB Storage
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Unlimited Photos and Videos
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Exclusive Support
                      </li>
                      <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                        Custom Branding Strategy
                      </li>
                    </ul>
                  </div>

                  <button
                    aria-label="Get the Plan button"
                    className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                  >
                    <span className="duration-300 group-hover/btn:pr-2">
                      Get the Plan
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                {/* <!-- Pricing Item --> */}
                <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    $189{" "}
                    <span className="text-regular text-waterloo dark:text-manatee">
                      /month
                    </span>
                  </h3>
                  <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    Large Pack
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

                  <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        300 GB Storage
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Unlimited Photos and Videos
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Exclusive Support
                      </li>
                      <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                        Custom Branding Strategy
                      </li>
                    </ul>
                  </div>

                  <button
                    aria-label="Get the Plan button"
                    className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                  >
                    <span className="duration-300 group-hover/btn:pr-2">
                      Get the Plan
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default SingleBlogPage;