/**/
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Clinic Information */}
          <div className="w-full md:w-1/3 mb-8">
            <img src={Logo} className="w-20" alt="Flowbite Logo" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              The Spine Clinic
            </h2>
            <p className="text-gray-600">Together they will walk again.</p>
          </div>

          {/* Quick Links  */}
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/appointmentbooking" className="hover:text-blue-600">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <span className="text-gray-600 flex items-center">
              <FaPhone className="mr-2" /> +234-806-430-6055
            </span>
            <span className="text-gray-600 flex items-center">
              <FaPhone className="mr-2" />
              +234 803 890 9678
            </span>
            <p className="text-gray-600 flex items-center">
              <FaEnvelope className="mr-2" /> info@thespineclinic.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/15piSC9eZS/"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://linkedin.com"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaLinkedinIn />
            
              </a>
  
              <a href="https://x.com/thespineclinik?t=fXdWu6pKsJaf1Qhbs2KEGw&s=09" className="text-blue-600 hover:text-blue-800">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/thespineclinic_?igsh=MWdvaHkzcjZoeDBhYg== " className="text-blue-600 hover:text-blue-800">
                <FaInstagram />
                </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 pt-6 mt-6 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} The Spine Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
