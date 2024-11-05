import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const AppointmentConfirm = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-4">Appointment Confirmed</h1>
        <p className="text-center text-gray-700 mb-4">
          Thank you for booking an appointment with us. Your request has been received and is being processed.
        </p>
        <p className="text-center text-gray-500 mb-6">
          You will receive a confirmation email shortly with the details of your appointment.
        </p>
        <div className="text-center">
          <Link to="/" className="text-indigo-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirm;
