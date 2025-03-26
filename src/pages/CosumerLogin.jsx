import React, { useState } from "react";
import "./Consumer.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ConsumerLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Access login function from context
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const encodedData = new URLSearchParams();
    encodedData.append("username", formData.username);
    encodedData.append("password", formData.password);

    try {
      const response = await fetch("http://192.168.17.62:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login Successful:", data);

        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          login(formData.username);
          navigate("/dashboard");
        } else {
          setError("Login successful but no token received.");
        }
      } else {
        setError(data.detail || "Login failed!");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid signup-container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center flex-column form-section">
          <div
            className="back-button"
            onClick={() => navigate("/login-selection")}
          >
            <i class="fi fi-rs-angle-left"></i>
          </div>
          <h2 className="mb-5">
            Login as <span className="highlight">Consumer</span>
          </h2>

          <form className="w-75" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="form-label">Username</label>
              <input
                type="email"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="mb-5">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button className="btn sign-up w-100" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="col-md-6 image-section1"></div>
      </div>
    </div>
  );
};

export default ConsumerLogin;
