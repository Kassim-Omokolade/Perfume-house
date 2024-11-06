import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import line from "../assets/line.png"
import head from "../assets/head.png"
import google from "../assets/google.png";
import { Link } from 'react-router-dom';


const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [remember,setRemember]=useState(false)
    const redirect=useNavigate();
    const handleSubmit =(e)=>{
      e.preventDefault();
   if(!email.trim() || !password.trim()){
       setError("All fields are required")

   }else{
    redirect("/")
   }
 

    }



  return (
    <div className="form-background p-3">
      <Link to="/">
        {" "}
        <img src={head} alt="logo" className="mt-2 p-2" />
      </Link>

      <div className=" d-flex justify-content-center align-items-center ">
        <form
          onSubmit={handleSubmit}
          className="mx-auto rounded-3   filling-form "
        >
          <h1 className="fs-3 fw-bold ">Welcome Back</h1>
          <p>Fill in your information to access your account.</p>

          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control  border-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="form-label mt-3">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control border-2 "
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-2 d-flex justify-content-between">
            <div>
              <input type="checkbox" id="remember" checked={remember}  onChange={(e)=> setRemember(e.target.checked)}/>
              <label htmlFor="remember" className="ms-2">
                Remember me
              </label>
            </div>
            <div>
              <p className="text-danger">Forgot Password</p>
            </div>
          </div>
          <p className="text-danger">{error}</p>
          <button className="w-100 rounded-3 border-0 butt"> Sign in</button>

          <img src={line} alt="line" />

          <button className="w-100 rounded-3  btn btn-outline-secondary p-2 text-dark fw-bold ">
            <img src={google} /> Continue with Google
          </button>

          <p className="text-secondary text-center mt-2">
            {" "}
            Don’t have an account?{" "}
            <span>
              <Link
                to={"/register"}
                className="text-decoration-none "
                style={{ color: "#8D34FF" }}
              >
                Sign Up
              </Link>
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );bo
}

export default Login