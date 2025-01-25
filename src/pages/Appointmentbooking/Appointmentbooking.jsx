import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointment_date: '',
    appointment_time: '',
    reason: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(formData.appointment_date);
    const currentDate = new Date();

    // Validation: Check if appointment date is in the past
    if (selectedDate.toDateString() === currentDate.toDateString()) {
      const selectedTime = formData.appointment_time;
      const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

      // If the user selects today, validate the time
      if (selectedTime < currentTime) {
        setErrorMessage("Appointment time must be in the future.");
        return;
      }
    } else if (selectedDate < currentDate) {
      setErrorMessage("Appointment date must be in the future.");
      return;
    }

    // Reset error message
    setErrorMessage('');

    console.log(formData);

    // Navigate to appointment confirmation page
    navigate('/appointmentconfirm');
  };

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen mt-16 mb-10 relative">
        {/* Back to Home Button */}
        <button
          onClick={handleBackToHome}
          className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition duration-300
          sm:top-6 sm:left-6 sm:py-2 sm:px-4 
          md:top-8 md:left-8 md:py-3 md:px-5 mr-16"
        >
          <HiOutlineArrowSmLeft className="text-lg" />
        </button>

        <div className="w-full max-w-lg p-8 bg-blue-200 rounded-lg shadow-lg
          sm:max-w-md md:max-w-xl lg:max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">Book Your Appointment</h1>
          
          {errorMessage && (
            <div className="bg-red-500 text-white text-center py-2 rounded mb-4">
              {errorMessage}
            </div>
          )}
          
          <form id="appointmentForm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-800">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter Full Name..."
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter Email Address..." 
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-800">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                placeholder="Enter Phone Number..." 
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="appointment_date" className="block text-sm font-medium text-gray-800">Preferred Date</label>
              <input 
                type="date" 
                id="appointment_date" 
                name="appointment_date" 
                placeholder="Enter Date Of Appointment..."
                value={formData.appointment_date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="appointment_time" className="block text-sm font-medium text-gray-800">Preferred Time</label>
              <input 
                type="time" 
                id="appointment_time" 
                name="appointment_time"
                value={formData.appointment_time}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-800">Reason for Visit</label>
              <textarea 
                id="reason" 
                name="reason" 
                placeholder="Enter Your Reason For The Appointment..."
                rows="4" 
                value={formData.reason}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-lg bg-blue-600 text-white py-4 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentBooking;
