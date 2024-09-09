import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DoctorSlots = () => {
    const { id } = useParams(); // Doctor's ID from the URL
    const navigate = useNavigate(); // To navigate to the next page after booking
    const [selectedDate, setSelectedDate] = useState('');
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null); // To store the selected slot
    const [error, setError] = useState('');
    const [showSlots, setShowSlots] = useState(false);

    // Fetch available slots for the selected date
    const fetchSlots = async (date) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/appointments/doctor/${id}/available-slots`, {
                params: {
                    date: date,
                    startTime: '09:00',
                    endTime: '17:00'
                }
            });
            setSlots(response.data);
            
        } catch (error) {
            setError('Error fetching available slots');
            console.error('Error fetching slots:', error);
        }
    };

    // Handle date submission
    const handleDateSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset any previous errors
        fetchSlots(selectedDate);
        setShowSlots(true);
    };

    // Select a slot
    const handleSlotSelect = (slotTime) => {
        setSelectedSlot(slotTime);
        setError(''); // Reset any previous errors
        console.log(`Selected slot: ${slotTime}`); // Log selected slot
    };

    // Confirm the appointment
    const handleConfirmAppointment = async () => {
      debugger;
      if (!selectedSlot) {
          setError('Please select a time slot.');
          return;
      }
  
      console.log(`Booking appointment for slot: ${selectedSlot}`); // Log before booking
  
      try {
          const response = await axios.post('http://localhost:8080/api/appointments/book', {
              doctorId: id,
              patientId: 1, // Replace with actual patient ID
              appointmentDateTime: selectedSlot, // Correctly formatted date-time
              appointmentType: 'CONSULTATION' // Adjust this as per your AppointmentType enum
          });
  
          console.log('Appointment booked successfully:', response.data); // Log success
          alert('Slot booked successfully!');
          navigate('/patient/confirmAppointment'); // Redirect to the next page after booking
      } catch (error) {
          setError('Error booking slot');
          console.error('Error booking slot:', error.response?.data || error.message);
      }
  };

    // Function to extract time from datetime
    const extractTime = (datetime) => {
        return datetime.split('T')[1]; // Returns only the time portion
    };

    return (
        <div className="bg-lightcyan flex flex-col items-center justify-center">
            {!showSlots ? (
                <form onSubmit={handleDateSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-center text-2xl font-semibold mb-4">Select Date</h2>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700">Select a Date</label>
                        <input
                            type="date"
                            id="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm"
                            required
                        />
                    </div>
                    <div className=' flex justify-center item-center'>
                    <button
                        type="submit"
                        className="mt-4 inline-block bg-orange-400 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Show Slots
                    </button>
                    </div>
                </form>
            ) : (
                <div>
                    <h2 className="text-center text-2xl font-semibold mb-4">Available Slots</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {slots.length === 0 ? (
                        <p className="text-center">No available slots</p>
                    ) : (
                        <div className="flex flex-wrap justify-center gap-4">
                            {slots.map((slot, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSlotSelect(slot)}
                                    className={`p-4 rounded-lg shadow-md border border-gray-300 text-lg font-semibold mb-4 hover:bg-green-600 text-white ${
                                        selectedSlot === slot ? 'bg-green-500' : 'bg-blue-400'
                                    }`}
                                >
                                    {extractTime(slot) ? extractTime(slot) : 'Unavailable'}
                                </button>
                            ))}
                        </div>
                    )}
                    {selectedSlot && (
                       <div className="mt-6 flex justify-center items-center">
                       <button
                           onClick={handleConfirmAppointment}
                           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                       >
                           Confirm Appointment
                       </button>
                   </div>
                   
                    )}
                </div>
            )}
        </div>
    );
};

export default DoctorSlots;
