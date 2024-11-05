import { FaClinicMedical, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Logo from '../../assets/abouthero.webp'
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative bg-blue-50 py-12 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4 flex items-center">
            <FaClinicMedical className="text-blue-700 mr-3" />
            Advanced Knee Surgery Care
          </h1>
          <p className="text-lg text-blue-800 mb-6">
            At <span className="font-semibold">Orthopedic Knee Clinic</span>, we specialize in cutting-edge, minimally invasive knee surgeries, ensuring faster recovery and better outcomes for our patients.
          </p>
          <div className="mt-4">
             <Link to="/blog">
                <button className="bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                    Learn More About Us
                </button>
             </Link>
           
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Logo}
            alt="Knee Surgery"
            className="w-full md:w-4/5 rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      {/* Contact Info */}
      <motion.div
        className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-md flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FaPhoneAlt className="text-blue-700 mr-3" />
        
        <p className="text-blue-800 font-medium">Call Us: (+234) 813-371-5097</p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
