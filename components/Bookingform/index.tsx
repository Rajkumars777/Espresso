import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Calendar, Users, MapPin, Music, Briefcase, GraduationCap, Heart, Baby, Church, Palette, Clock, MapPinned } from 'lucide-react';
import { send } from "emailjs-com";
import { AlertCircle, Cake, Gift, Star } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Toaster, toast } from "react-hot-toast";
import confetti from "canvas-confetti";
interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  duration: string;
  attendeeCount: string;
  eventType: string;
  organization: string;
  venueType: string;
  description: string;
  budgetRange: string;
  termsAccepted: boolean;
  services: {
    catering: boolean;
    decoration: boolean;
    photography: boolean;
    audioVisual: boolean;
    security: boolean;
    parking: boolean;
  };
}
const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      containerStyle={{
        inset: 0,
        top: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};
const EventBookingForm: React.FC = () => {
      const [showBookingForm, setShowBookingForm] = useState(false);
      const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    duration: '',
    attendeeCount: '',
    eventType: '',
    organization: '',
    venueType: '',
    description: '',
    budgetRange: '',
    termsAccepted: false,
    services: {
      catering: false,
      decoration: false,
      photography: false,
      audioVisual: false,
      security: false,
      parking: false
    }
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
  const closeModal = () => {
    setTermsModalOpen(false);
  };
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
         { ...formData, services: JSON.stringify(formData.services) },
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
  const eventTypes = [
    { value: "birthday", label: "Birthday Event", icon: Calendar },
    { value: "wedding", label: "Wedding Event", icon: Heart },
    { value: "engagement", label: "Engagement Ceremony", icon: Heart },
    { value: "babyShower", label: "Baby Shower Event", icon: Baby },
    { value: "corporate", label: "Corporate Event", icon: Briefcase },
    { value: "school", label: "School Event", icon: GraduationCap },
    { value: "cultural", label: "Cultural Event", icon: Palette },
    { value: "academic", label: "Academic Conference", icon: GraduationCap },
    { value: "concert", label: "Music & Concert Event", icon: Music },
    { value: "fashion", label: "Fashion Show", icon: Palette },
    { value: "startup", label: "Startup & Investor Conference", icon: Briefcase },
    { value: "religious", label: "Religious & Spiritual Event", icon: Church }
  ];

  const budgetRanges = [
    { value: "0-100000", label: "₹0 - ₹1,00,000" },
    { value: "100000-300000", label: "₹1,00,000 - ₹3,00,000" },
    { value: "300000-500000", label: "₹3,00,000 - ₹5,00,000" },
    { value: "500000-1000000", label: "₹5,00,000 - ₹10,00,000" },
    { value: "1000000-2000000", label: "₹10,00,000 - ₹20,00,000" },
    { value: "2000000+", label: "₹20,00,000+" }
  ];

  const today = new Date().toISOString().split('T')[0];

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'termsAccepted') {
      setFormData(prev => ({
        ...prev,
        termsAccepted: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }));
    }
  };

  const validateForm = (): boolean => {
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (!validatePhone(formData.phone)) {
      alert('Please enter a valid phone number');
      return false;
    }
    if (parseInt(formData.duration) <= 0) {
      alert('Duration must be greater than 0');
      return false;
    }
    if (parseInt(formData.attendeeCount) <= 0) {
      alert('Number of attendees must be greater than 0');
      return false;
    }
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s-+]{10,}$/;
    return phoneRegex.test(phone);
  };



  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 mb-12 dark:bg-black dark:text-white">
       
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        <Calendar className="inline-block mr-3 text-blue-500" />
        Event Booking Form
      </h2>
      <ToastProvider />
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="Your Full Name"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="Your Phone Number"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">Organization/Company</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="Organization Name (if applicable)"
          />
        </div>

        {/* Event Details */}
        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">Event Type *</label>
          <select
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
          >
            <option value="">Select Event Type</option>
            {eventTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">
            Event Date *
          </label>
          <input
            type="date"
            name="eventDate"
            required
            min={today}
            value={formData.eventDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
          />
        </div>

        

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">
            Duration (hours) *
          </label>
          <input
            type="number"
            name="duration"
            required
            min="1"
            value={formData.duration}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="Event Duration in Hours"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">
            Expected Attendees *
          </label>
          <input
            type="number"
            name="attendeeCount"
            required
            min="1"
            value={formData.attendeeCount}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="Number of Expected Attendees"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">Venue Preference *</label>
          <select
            name="venueType"
            required
            value={formData.venueType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
          >
            <option value="">Select Venue Type</option>
            <option value="indoor">Indoor Venue</option>
            <option value="outdoor">Outdoor Venue</option>
            <option value="hybrid">Hybrid (Indoor + Outdoor)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-700 dark:text-white">Budget Range *</label>
          <select
            name="budgetRange"
            required
            value={formData.budgetRange}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
          >
            <option value="">Select Budget Range</option>
            {budgetRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-gray-700 dark:text-white">
            Event Description & Special Requirements
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="Please describe your event and any special requirements or preferences..."
          />
        </div>

        {/* Services */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-gray-700 dark:text-white">Required Services</label>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.keys(formData.services).map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={service}
                  checked={formData.services[service as keyof typeof formData.services]}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span className="capitalize">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Terms and Submit */}
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
        <div className="md:col-span-2">
          <button
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
            type="submit"
          >
            Submit Booking Request
          </button>
        </div>
      </form>
    </div>
  )};

export default EventBookingForm;