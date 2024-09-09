import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorAppointments = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]); // Initialize with an empty array
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch doctor ID from session storage
    const doctorId = sessionStorage.getItem("userId");

    if (doctorId) {
      // Fetch doctor and appointments data
      axios.get(`http://localhost:8080/api/doctors/${doctorId}`)
        .then(response => {
          setDoctor(response.data);
          setAppointments(response.data.booking || []); // Fallback to empty array if undefined
          console.log('Doctor data:', response.data);
          console.log('Appointments:', response.data.booking);
        })
        .catch(error => {
          console.error(error);
          setError("Error fetching doctor data");
        });
    } else {
      setError("No doctor ID found in session storage");
    }
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {doctor && (
        <div>
          <h2>Dr. {doctor.firstName} {doctor.lastName}</h2>
          <h3>Appointments</h3>
          {appointments.length > 0 ? (
            <ul>
              {appointments.map(appointment => (
                <li key={appointment.id}>
                  Date: {appointment.date} | Time: {appointment.time} | Type: {appointment.appointmentType} | Patient: {appointment.selectedPatient.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No appointments found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;
