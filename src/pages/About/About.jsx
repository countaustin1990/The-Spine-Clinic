import { FaUserMd, FaHospitalAlt, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
//import Logo from "../../assets/Logo.png";
import AboutHero from "../../components/Abouthero/AboutHero";

const AboutComponent = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleAppointmentClick = () => {
    navigate("/appointmentbooking"); // Redirect to the appointment booking page
  };

  return (
    <>
      <AboutHero />
      <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900">About Our Team</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaUserMd className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">
                Expert Spine Surgeons
              </h3>
              <p className="mt-2 text-gray-500">
                Our team of renowned spine surgeons specializes in complex spine
                surgeries, minimally invasive procedures, and pain management.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaHospitalAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">
                State-of-the-Art Facilities
              </h3>
              <p className="mt-2 text-gray-500">
                The Spine Clinic is equipped with the latest diagnostic and
                surgical tools to ensure top-tier care and faster recovery for
                our patients.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <FaPhoneAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">
                24/7 Patient Support
              </h3>
              <p className="mt-2 text-gray-500">
                We provide around-the-clock support for appointments,
                consultations, and emergency spine-related issues.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700"
              onClick={handleAppointmentClick}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
