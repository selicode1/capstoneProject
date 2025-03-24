import React from "react";
import "./Consumer.css"
import { useNavigate } from 'react-router-dom';

const ConsumerLogin = () => {
  const navigate = useNavigate();
    return (
        <div className="container-fluid signup-container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center flex-column form-section">
          <div className="back-button" onClick={() => navigate('/login-selection')}>
            <i class="fi fi-rs-angle-left"></i>
            </div>
            <h2 className="mb-5">
              Login as <span className="highlight">Consumer</span>
            </h2>
  
            <form className="w-75">
              <div className="mb-5">
                <label className="form-label">Username</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-5">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <button className="btn sign-up w-100" onClick={() => navigate('/landing')}>Login</button>
            </form>
          </div>
  
          {/* Right Section - Image */}
          <div className="col-md-6 image-section1"></div>
        </div>
      </div>
    )
}

export default ConsumerLogin;