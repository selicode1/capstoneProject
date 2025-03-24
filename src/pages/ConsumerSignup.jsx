import React from "react";
import "./Consumer.css"
import { useNavigate } from 'react-router-dom';

const ConsumerSignup = () => {
  const navigate = useNavigate();
    return (
        <div className="container-fluid signup-container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center flex-column form-section">
          <div className="back-button" onClick={() => navigate('/selection')}>
            <i class="fi fi-rs-angle-left"></i>
            </div>
            <h2 className="mb-5">
              Signup As <span className="highlight">Consumer</span>
            </h2>
  
            <form className="w-75">
              <div className="mb-5">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-5">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-5">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-5">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>
              <button type="submit" className="btn sign-up w-100 mt-3" onClick={() => navigate('/landing')} >Sign Up</button>
            </form>
  
            <div className="social-login mt-4">
              <p className="or-text">OR</p>
              <div className="social-icons mt-4">
              <i class="fi fi-brands-facebook social-icon facebook"></i>
              <i class="fi fi-brands-instagram social-icon instagram"></i>
              <i class="fi fi-brands-twitter-alt social-icon"></i>
              </div>
            </div>
          </div>
  
          {/* Right Section - Image */}
          <div className="col-md-6 image-section1"></div>
        </div>
      </div>
    )
}

export default ConsumerSignup;