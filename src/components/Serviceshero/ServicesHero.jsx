import Team from '../../assets/Team.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ServicesHero = () => {
  return (
    <section className="bg-gray-50 pt-8 md:pt-16 pb-12 md:pb-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Specialized Orthopedic Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We offer a full spectrum of advanced knee surgery and rehabilitation services, ensuring the highest quality care for every patient. Trust our experts to guide you through diagnosis, surgery, and recovery.
          </p>
          <div className="mt-4">
            {/* Use Link to navigate to the Blog page */}
            <Link to="/blog">
              <button className="bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
                Explore Our Blog
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
            src={Team}
            alt="Knee Surgery Service"
            className="w-full md:w-4/5 rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
