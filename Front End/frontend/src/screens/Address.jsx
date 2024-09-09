import React, { useState } from "react";
import { addAddress } from "../services/AddressService";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from '../productImages/addProduct.jpg';

export default function Address() {
  const [userId, setUserId] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addressDTO = {
        userId,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        country,
      };
      await addAddress(addressDTO);
      toast.success("Address added successfully!");
    } catch (error) {
      setError("Failed to add address.");
      toast.error("Failed to add address.");
    }
  };

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const countries = ["India"];

  return (
    <div className="container-fluid"style={{
        backgroundImage: `url(${bg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
    }}>
        <br />
      <h2 className="mb-2">Add Address</h2>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label label-primary" htmlFor="userId">User ID</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="addressLine1">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                id="addressLine1"
                placeholder="Enter Address Line 1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="addressLine2">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                id="addressLine2"
                placeholder="Enter Address Line 2 (optional)"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <div className="form-group" style={{width:'45%'}}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="form-group" style={{width:'45%'}}>
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  placeholder="Enter Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
              <div className="mb-3 text-left" style={{width:'45%'}}>
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  id="state"
                  className="form-select"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                >
                  <option value="">Select State</option>
                  {statesOfIndia.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3" style={{width:'45%'}}>
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select
                id="country"
                className="form-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            </div>           
            <button type="submit" className="btn btn-dark" style={{position:'relative', alignContent:'center'}}>
              Add Address
            </button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </form>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 d-grid">
            <Link to='/payment' className="btn btn-primary mt-3">Proceed to Payment</Link><br />
            <Link to='/cart' className="btn btn-warning mt-1">View Shopping Cart</Link><br />
            <Link to='/home' className="btn btn-danger mt-1">Cancel</Link>          
        </div>
        <div className="col-4"></div>
      </div>
      <ToastContainer />
    </div>
  );
}
