import { FaCheckCircle, FaUserMd, FaHeartbeat } from "react-icons/fa";

const HomeContent = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Introduction Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to The Spine Clinic
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          We provide world-class spine care, offering personalized treatment plans
          and advanced orthopedic solutions to help you get back to your best
          life. Trust us with your spine health and experience compassionate care
          from our expert team.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <FaUserMd className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Doctors</h3>
            <p className="text-gray-600">
              Our clinic is staffed with board-certified spine specialists
              and orthopedic surgeons dedicated to providing top-quality care.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <FaHeartbeat className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Treatments</h3>
            <p className="text-gray-600">
              From non-invasive therapies to advanced surgical procedures, we offer
              a full range of treatments tailored to your needs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Care</h3>
            <p className="text-gray-600">
              Every patient receives a personalized treatment plan, ensuring
              the best possible outcomes for their specific condition.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12">
          <a
            href="/appointments"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Book Your Appointment Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
