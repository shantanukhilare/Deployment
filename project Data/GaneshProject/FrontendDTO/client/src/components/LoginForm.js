import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Make sure to import your Navbar component
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/users/signin", {
        email: email,
        password: password,
      });

      // Store email and role in session storage
      sessionStorage.setItem("userEmail", response.data.email);
      sessionStorage.setItem("userRole", response.data.role);
      sessionStorage.setItem("userId", response.data.id);
      const userId = response.data.id;

      // Redirect to home page or another page based on role
      if (response.data.role === "ROLE_DOCTOR") {
        navigate(`/doctor-dashboard/${userId}`);
      } else if (response.data.role === "ROLE_PATIENT") {
        navigate(`/`);
      } else if (response.data.role === "ROLE_ADMIN") {
        navigate("/admin-dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      <main className="flex-1 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Not a user?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
