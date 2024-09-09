import { Link, useNavigate } from "react-router-dom";
import bg from "../productImages/register.jpg";
import { useState } from 'react';
import { toast } from 'react-toastify';

// Dummy register function (replace with your actual API call)
const register = async (firstName, lastName, email, password, phone) => {
    // Implement your registration API call here
    return { status: 'success' }; // Change as needed based on your API
};

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const onRegister = async (e) => {
        e.preventDefault(); // Prevents the default form submission

        if (firstName.length === 0) {
            toast.error('Please enter first name');
        } else if (lastName.length === 0) {
            toast.error('Please enter last name');
        } else if (email.length === 0) {
            toast.error('Please enter email');
        } else if (password.length === 0) {
            toast.error('Please enter password');
        } else if (confirmPassword.length === 0) {
            toast.error('Please confirm the password');
        } else if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            // Call the register API
            const result = await register(firstName, lastName, email, password, phone);
            if (result['status'] === 'success') {
                toast.success('Successfully registered a new user');
                navigate('/login');
            } else {
                toast.error(result['error']);
            }
        }
    };

    return (
        <div className="container-fluid"
            style={{
                backgroundImage: `url(${bg})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
            }}>
                <div className="row">
                    <div className="col-1"></div>
            <div className="col-5 mt-5" style={{
                backgroundColor: "beige", 
                padding: "20px",
                borderRadius: "8px"
            }}>                 
                <form style={{ width: "100%" }} onSubmit={onRegister}>
                    <h1 className="mb-3" style={{ color: "brown" }}>Register Here!</h1>   
                    <div className="mb-3">
                        <input 
                            type="text" 
                            placeholder="First Name"
                            className="form-control" 
                            id="firstName" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                       <input 
                            type="text" 
                            placeholder="Last Name"
                            className="form-control" 
                            id="lastName" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="email"                             
                            placeholder="Email"
                            className="form-control" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                         <input 
                            type="password"                              
                            placeholder="Password"
                            className="form-control" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password"                              
                            placeholder="Confirm Password"
                            className="form-control" 
                            id="confirmPassword" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="phone" 
                            placeholder="Enter 10-digit mobile number" 
                            maxLength="10" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Register</button>
                    <div>
                        <p>Already have an Account? <Link to='/login' className="text-primary">Login here</Link></p>
                    </div>
                </form>               
            </div>
            <div className="col-6"></div>
            </div>
        </div>
    );
}
