import { motion } from "framer-motion"; // Import Framer Motion for animations
import Kaytoken from "../../assets/Kaytoken.jpg"; // Import the image correctly
import { FaArrowRight } from "react-icons/fa"; // Import right arrow icon
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <div 
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Kaytoken})` }} // Use the imported image variable
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Animated Content */}
      <motion.div 
        className="relative z-10 text-center text-white p-6 md:p-10 max-w-2xl"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Create a Solution For Your Wellbeing
        </h1>
        <p className="text-lg md:text-xl font-medium">
          Invest with 
          <Link to="/blog">
            <span className="inline-flex items-center gap-2 font-extrabold text-yellow-300 py-2 px-6 cursor-pointer">
                KayT0ken
                <FaArrowRight className="text-yellow-300 text-xl" />
            </span>
          </Link>
          
        </p>
      </motion.div>
    </div>
  );
};

export default Jumbotron;
