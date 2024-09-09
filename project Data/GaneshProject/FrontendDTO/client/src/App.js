import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import your Navbar component
import LoginPage from "./components/LoginForm";
import RegisterPatient from "./components/RegisterPatient"; // Create these components
import PatientDashboard from "./components/PatientDashboard"; // Create these components
import RegisterDoctor from "./components/RegisterDoctor";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientProfile from "./components/PatientProfile";
import DoctorProfile from "./components/DoctorProfile";
import DoctorProfiles from "./screens/Patient/DoctorProfiles";
import AvailableSlots from "./screens/Patient/AvailableSlots";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DoctorSlots from "./components/DoctorSlots";
import ConfirmAppointment from "./screens/Patient/ConfirmAppointment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/patient" element={<RegisterPatient />} />
        <Route path="/register/doctor" element={<RegisterDoctor />} />
        <Route path="/doctor-dashboard/:id" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/" element={<DoctorProfiles />} />
        <Route path="/doctor/:id/slots" element={<AvailableSlots />} />
        <Route path="/doctor/:doctorId/slots" component={DoctorSlots} />
        {/* <Route path="/" element={<DateSelection />} /> Optional */}
        <Route path="/doctors" element={<DoctorProfiles />} />
        <Route path="/doctor/:doctorId/slots" element={<DoctorSlots />} />
        
        <Route path="/patient/confirmAppointment" element={<ConfirmAppointment />} />
        
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
