import bg from '../productImages/loginBackgroundImage.jpg';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get navigation hook
  const navigate = useNavigate()

  const onLogin = async () => {
    if (email.length == 0) {
      toast.error('Please enter email')
    } else if (password.length == 0) {
      toast.error('Please enter password')
    } else {
      // call login API and check its success
        navigate('/home')
      }
    }

  return (
    <div className="container-fluid" style={{
        backgroundImage: `url(${bg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
    }}>
        <div className="row">
        <div className="col-6"></div>
        <div className="col-5 mt-5 shadow-lg p-3 " style={{ backgroundColor: "lightcyan", borderRadius: "5%" }}>
            <h1 className="mb-4 mt-4">Welcome Back!</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                class="form-control transparent-input"
                placeholder="abc@email.com"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"                
                onChange={(e)=>{setPassword(e.target.value)}}
                class="form-control" 
                placeholder="*****************"
                id="exampleInputPassword1"
              />
            </div>
            <p>Don't have an Account? 
            <Link to='/register' className="ms-2">Register here</Link></p>
            <div class="d-grid gap-2">
              <button onClick={onLogin} class="btn btn-primary mb-3" type="button">
                Login
              </button>
              <Link className="btn btn-warning mb-4" to="/home" type="button" >
                Go Back
              </Link>
            </div>
          </form>
        </div>
        <div className="col-1 mb-5"></div>
      </div>
    </div>
  );
}
