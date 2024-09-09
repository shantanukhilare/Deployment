import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmAppointment = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">Appointment Booked</h2>
        <p className="text-lg text-gray-700 mb-6">
          Your appointment has been successfully booked. You will receive a confirmation email shortly with the details.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmAppointment;
