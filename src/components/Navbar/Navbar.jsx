import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu open/close
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu after navigating to a new route
  useEffect(() => {
    setIsOpen(false); // Close the mobile menu after navigation
  }, [location]);

  return (
    <nav className="bg-gray-400 shadow-lg px-6 py-6">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={Logo} className="w-24" alt="The Spine Clinic" />
            </Link>
          </div>

          {/* Links and Appointment button */}
          <div className="hidden lg:flex items-center space-x-4 lg:order-2">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold uppercase"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold uppercase"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold uppercase"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold uppercase"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold uppercase"
            >
              Contact
            </Link>

            {/* No login/logout logic anymore */}
            <Link to="/appointmentbooking">
              <button className="text-white bg-blue-700 uppercase hover:bg-blue-800 font-bold focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-4 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Doctor Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* No login/logout links */}
            <Link to="/appointmentbooking">
              <button
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setIsOpen(false)}
              >
                Doctor Appointment
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
