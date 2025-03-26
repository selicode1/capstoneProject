import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Producer.css";

const ProducerSignup = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    address: "", // Added address
    role: "FARMER",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const [loading, setLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button
  
    try {
      const response = await fetch("http://192.168.9.90:8000/api/register", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Signup Successful:", data);  
        navigate("/producerlogin");
        alert("Signup Successful");  
      }
       else {
        setError(data.detail || "Signup failed!");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false); // Re-enable button
    }
  };
  

  return (
    <div className="container-fluid signup-container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center flex-column form-section">
          <div className="back-button" onClick={() => navigate('/selection')}>
            <i className="fi fi-rs-angle-left"></i>
          </div>
          <h2 className="mb-5">
            Signup As <span className="highlight">Producer</span>
          </h2>

          {/* Form */}
          <form className="w-75" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button type="submit" className="btn sign-up w-100 mt-3" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {/* Social Login */}
          <div className="social-login mt-4">
            <p className="or-text">OR</p>
            <div className="social-icons mt-4">
              <i className="fi fi-brands-facebook social-icon facebook"></i>
              <i className="fi fi-brands-instagram social-icon instagram"></i>
              <i className="fi fi-brands-twitter-alt social-icon"></i>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="col-md-6 image-section"></div>
      </div>
    </div>
  );
};

export default ProducerSignup;
