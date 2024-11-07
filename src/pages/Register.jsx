import React from 'react'
import head from "../assets/head.png";
import { Link } from 'react-router-dom';
import line from "../assets/line.png";
import google from "../assets/google.png";
const Register = () => {
  return (
    <div className="form-background p-2">
      <Link>
        <img src={head} alt="logo" className="p-3 mt-2" />
      </Link>
      <div className="d-flex align-items-center justify-content-center ">
        <form className=" mx-auto rounded-3  filling-form1  ">
          <h1 className="fs-3 fw-bold ">Get Started</h1>
          <p>Lets get started by filling out the information below.</p>

          <div className="d-flex gap-3 justify-content-between">
            <div>
              <label htmlFor="name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control  border-2"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor="name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control  border-2"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control  border-2"
              placeholder="Enter your email"
            />

            <label htmlFor="password" className="form-label mt-3">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control border-2 "
              placeholder="Enter your password"
            />

            <label htmlFor="password1" className="form-label mt-3">
              Confirm Password
            </label>
            <input
              type="password"
              id="password1"
              className="form-control border-2 "
              placeholder="Confirm your password"
            />
          </div>

          <div className="mt-3 d-flex ">
            

            <input type="checkbox" id="agree"  className='mb-4'/>
            <label htmlFor="agree" className="ms-2 register">
              I agree to <span style={{color:"#8D34FF"}}>Terms of Service</span> and <span style={{color:"#8D34FF"}}>Privacy Policies</span> 
            </label>
          </div>

          <button className="w-100 rounded-3 border-0 butt m-2"> Sign in</button>

          <img src={line} alt="line" className='w-100 '/>
         
         <button className='w-100 rounded-3  btn btn-outline-secondary p-2 text-dark fw-bold '> <img src={google}/> Continue with Google</button>
             <p className='text-secondary text-center mt-2'> Don’t have an account? <span  ><Link to={"/login"} className='text-decoration-none ' style={{color:"#8D34FF"}}>Sign Up</Link></span> </p>

        </form>
      </div>
    </div>
  );
}

export default Register