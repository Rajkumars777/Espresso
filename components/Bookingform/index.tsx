import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Calendar, Users, MapPin, Music, Briefcase, GraduationCap, Heart, Baby, Church, Palette, Clock, MapPinned } from 'lucide-react';
import { send } from "emailjs-com";
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

const EventBookingForm: React.FC = () => {
  const [showBookingForm, setShowBookingForm] = useState(true);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, checked, value } = e.target as HTMLInputElement;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

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
  };

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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s-+]{10,}$/;
    return phoneRegex.test(phone);
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the Terms and Conditions");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await send(
        "service_l8swekh",
        "template_102irqn",
        { ...formData, services: JSON.stringify(formData.services) },
        "pcbNTvmHbhQHPQdSN"
      );

      console.log("SUCCESS!", response.status, response.text);
      setLoading(false);
      setShowBookingForm(false);
      setShowSuccess(true);
      triggerConfetti();
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setShowBookingForm(true);
        setFormData({
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
      }, 5000);
    } catch (err) {
      console.log("FAILED...", err);
      alert("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  const closeModal = () => {
    setTermsModalOpen(false);
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

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 mb-12 dark:bg-black dark:text-white relative min-h-[600px]">
      {showSuccess ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black rounded-2xl animate-fade-in">
          <div className="text-center space-y-6 animate-success-appear">
            <div className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-8">
              <svg 
                className="w-16 h-16 text-green-500 animate-success-check" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-500 animate-success-text">
              Booking Request Submitted!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg animate-success-text">
              Thank you for your submission. We'll get back to you shortly.
            </p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            <Calendar className="inline-block mr-3 text-blue-500" />
            Event Booking Form
          </h2>
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
              <label className="block mb-2 text-gray-700 dark:text-white">
                Organization/Company
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
                placeholder="Organization Name (if applicable)"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 dark:text-white">
                Event Type *
              </label>
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
              <label className="block mb-2 text-gray-700 dark:text-white">
                Venue Preference *
              </label>
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
              <label className="block mb-2 text-gray-700 dark:text-white">
                Budget Range *
              </label>
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
              <label className="block mb-2 text-gray-700 dark:text-white">
                Required Services
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.keys(formData.services).map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name={service}
                      checked={formData.services[service as keyof typeof formData.services]}
                      onChange={handleCheckboxChange}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="capitalize text-gray-700 dark:text-white">
                      {service}
                    </span>
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
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 text-gray-700 dark:text-white">
                I accept the{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setTermsModalOpen(true)}
                >
                  Terms and Conditions
                </span>
              </label>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Booking Request"
                )}
              </button>
            </div>
          </form>
        </>
      )}

      {/* Terms Modal */}
      {termsModalOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3">
           <h1 className="text-xl font-semibold mb-4">Terms and Conditions</h1>
           <div className="text-sm space-y-4 max-h-[70vh] overflow-y-auto">
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
     <div>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add these styles to your global CSS or Tailwind config
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes successAppear {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes successCheck {
    0% { transform: scale(0); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  @keyframes successText {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }

  .animate-success-appear {
    animation: successAppear 0.5s ease-out;
  }

  .animate-success-check {
    animation: successCheck 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .animate-success-text {
    animation: successText 0.6s ease-out;
    animation-delay: 0.2s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
`;

export default EventBookingForm;