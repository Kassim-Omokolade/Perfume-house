import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center main1-color-bg text-center p-2">
      <div>
        <img
          src="https://img.freepik.com/free-vector/glitch-background_23-2148068933.jpg?semt=ais_hybrid"
          alt=""
          className="object-object-fit-cover rounded-2 img-fluid"
          style={{ width: "400px" }}
        />
        <h2 className="fs-5 my-3">OOOps!! Page Not Found</h2>
        <Link to="/" className="d-block mx-auto">
          <button className="main-color-bg text-white border-0 rounded-2">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
