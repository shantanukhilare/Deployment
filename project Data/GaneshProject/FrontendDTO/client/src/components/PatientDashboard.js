import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here, such as clearing session storage
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-center font-bold text-xl">
          Patient Dashboard
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/patient-profile"
                className="flex items-center p-4 hover:bg-blue-700"
              >
                <FaUser className="mr-3" />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointments"
                className="flex items-center p-4 hover:bg-blue-700"
              >
                <FaCalendarAlt className="mr-3" />
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notifications"
                className="flex items-center p-4 hover:bg-blue-700"
              >
                <FaBell className="mr-3" />
                Notifications
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            className="flex items-center text-red-400 hover:text-red-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome, [Patient Name]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">
                Upcoming Appointments
              </h3>

              {/* Example upcoming appointments */}
              <ul>
                <li>Dr. Smith - August 20, 2024</li>
                <li>Dr. Johnson - September 5, 2024</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Recent Notifications</h3>
              {/* Example notifications */}
              <ul>
                <li>Your appointment with Dr. Smith has been confirmed.</li>
                <li>Reminder: Your annual check-up is due next month.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">Profile Summary</h3>
              {/* Example profile summary */}
              <p>
                <strong>Email:</strong> patient@example.com
              </p>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong> 123 Main St, Hometown, USA
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
