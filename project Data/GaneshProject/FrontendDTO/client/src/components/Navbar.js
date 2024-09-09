import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav
        className={`max-w-screen-2xl mx-auto ${
          iconActive ? "block" : "hidden"
        } md:flex md:items-center`}
      >
        <h2 className="text-2xl font-bold px-4 py-2">
          <NavLink to="/">E-MED</NavLink>
        </h2>
        <ul className="flex flex-col md:flex-row md:space-x-6 md:px-4">
          <li>
            <NavLink to="/" className="block py-2 px-4 hover:bg-gray-700">
              Home
            </NavLink>
          </li>
          {sessionStorage.getItem("userRole") === "ROLE_PATIENT" && (
            <>
              <li>
                <NavLink
                  to="/patient-dashboard"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appointments"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  My Appointments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/patient-profile"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Profile
                </NavLink>
              </li>
            </>
          )}
          {sessionStorage.getItem("userRole") === "ROLE_DOCTOR" && (
            <>
              <li>
                <NavLink
                  to="/appointments"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Appointments With Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Profile
                </NavLink>
              </li>
            </>
          )}
          {sessionStorage.getItem("userRole") === "ROLE_ADMIN" && (
            <li>
              <NavLink
                to="/dashboard"
                className="block py-2 px-4 hover:bg-gray-700"
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {!sessionStorage.getItem("userRole") ? (
            <>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block py-2 px-4 hover:bg-gray-700 focus:outline-none"
                >
                  Register
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
                    <NavLink
                      to="/register/patient"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Register as Patient
                    </NavLink>
                    <NavLink
                      to="/register/doctor"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Register as Doctor
                    </NavLink>
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="block py-2 px-4 hover:bg-gray-700"
                >
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 hover:bg-gray-700"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-icons md:hidden">
        {!iconActive ? (
          <button
            className="p-2 text-white"
            onClick={() => setIconActive(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            className="p-2 text-white"
            onClick={() => setIconActive(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
