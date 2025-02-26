import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { sendMessage } from "../../services/firebaseService";

const Contact = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for form submission status
  const [formStatus, setFormStatus] = useState({
    success: null,
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form validation function
  const isFormValid = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return false;
    }
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Simulated form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      setFormStatus({
        success: false,
        message: "Please fill all fields correctly.",
      });
      return;
    }

    try {
      // Simulate an API request
      // const response = await fetch('https://example.com/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      await sendMessage(formData);

      setFormStatus({
        success: true,
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch {
      setFormStatus({
        success: false,
        message: "Error occurred. Please try again.",
      });
    }
  };

  const handleBackToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="absolute top-4 left-4 flex items-center bg-blue-500 text-gray-200 py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
      >
        <HiOutlineArrowSmLeft className="mr-2" aria-label="Back to Home" />
      </button>

      <div className="w-full max-w-5xl bg-blue-200 rounded-lg shadow-lg p-8 md:p-12 space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        {formStatus.message && (
          <div
            className={`text-center p-4 mb-4 ${
              formStatus.success
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {formStatus.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt
                className="text-xl text-gray-600"
                aria-label="Phone"
              />
              <div>
                <h4 className="font-semibold text-gray-700">Phone</h4>
                <span className="text-gray-600 flex items-center">
                  +234-806-430-6055
                </span>
                <span className="text-gray-600 flex items-center">
                  +234 803 890 9678
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope
                className="text-xl text-gray-600"
                aria-label="Email"
              />
              <div>
                <h4 className="font-semibold text-gray-700">Email</h4>
                <p className="text-gray-600">info@thespineclinic.org</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt
                className="text-xl text-gray-600"
                aria-label="Location"
              />
              <div>
                <h4 className="font-semibold text-gray-700">Location</h4>
                <p className="text-gray-600">Lekki Phase 1, Lagos, Nigeria</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-blue-600 hover:text-blue-800"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
               
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-pink-500 hover:text-pink-700"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-blue-700 hover:text-blue-900"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                 <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-blue-400 hover:text-blue-600"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                autoComplete="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-600 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
