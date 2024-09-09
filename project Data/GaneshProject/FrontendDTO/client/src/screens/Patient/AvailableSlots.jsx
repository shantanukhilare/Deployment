import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DoctorSlots from '../../components/DoctorSlots';



const AvailableSlots = () => {
    const { id } = useParams();
    const [selectedSlot, setSelectedSlot] = useState(null);

    const bookAppointment = () => {
        if (selectedSlot) {
            toast.success(`Appointment booked for slot: ${selectedSlot}`);
            // Add logic to save the appointment in your backend
        } else {
            toast.error('Please select a time slot');
        }
    };

    return (

        <div className="container mx-auto mt-10">
          
            
          <h2 className="text-center text-2xl font-semibold mb-8">Available Slots for Doctor </h2>
           
            <DoctorSlots />
            
            <div className="flex flex-col items-center ">
                
                {/* <button 
                    className="mt-4 bg-green-700 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={bookAppointment}
                >
                    Confirm Appointment
                </button> */}
            </div>
        </div>
    );
}

export default AvailableSlots;
