
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../index.css'; // Import custom CSS
//import Heropic1 from "../../assets/Heropic1.avif" // Adjust the path as necessary
import VideoPlayer from '../../components/videos/VideoPlayer.pro';

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
};

const Home = () => {
  return (
    <>
      <div className="relative">
        <Slider {...settings}>
          {/* Hero Slide 1 */}
          <div className="hero-slide point">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">Comprehensive Spine Care</h1>
              <p className="hero-subtitle">Delivering personalized treatment for spine and orthopedic conditions.</p>
              <div className="flex flex-col md:flex-row md:space-x-4 hero-button-container">
                <Link to="/appointmentbooking" className="hero-button hero-button-primary w-full md:w-auto mb-4 md:mb-0">Book Appointment</Link>
                <Link 
                  to="/services" 
                  className="hero-button hero-button-secondary w-full md:w-auto border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded">
                  Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Slide 2 */}
          <div className="hero-slide pointed" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900?spine2)' }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">Expert Orthopedic Surgeons</h1>
              <p className="hero-subtitle">Providing specialized care to help you recover and regain mobility.</p>
              <div className="flex flex-col md:flex-row md:space-x-4 hero-button-container">
                <Link to="/appointmentbooking" className="hero-button hero-button-primary w-full md:w-auto mb-4 md:mb-0">Book Appointment</Link>
                <Link 
                  to="/about" 
                  className="hero-button hero-button-secondary w-full md:w-auto border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded">
                  About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Slide 3 */}
          <div className="hero-slide pointer">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">Advanced Spine Surgery</h1>
              <p className="hero-subtitle">State-of-the-art techniques for minimally invasive spine surgeries.</p>
              <div className="flex flex-col md:flex-row md:space-x-4 hero-button-container">
                <Link to="/appointmentbooking" className="hero-button hero-button-primary w-full md:w-auto mb-4 md:mb-0">Book Appointment</Link>
                <Link 
                  to="/contact" 
                  className="hero-button hero-button-secondary w-full md:w-auto border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/*<PartnersSponsors/>*/}
   <VideoPlayer/>
    </>
  );
};

export default Home;
