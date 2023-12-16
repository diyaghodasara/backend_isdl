import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./register.css";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  // State to manage user input for registration
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  // Function to handle user input changes
  const handleChangeEvent = (e, field) => {
    let fieldValue = e.target.value;
    setNewUser({ ...newUser, [field]: fieldValue });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  // Function to handle form submission (user registration)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the registration API endpoint
      const response = await axios.post('https://cyan-barnacle-slip.cyclic.app/register', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle successful registration
      // Redirect the user to the login page after successful registration
      navigate('/login');
    } catch (error) {
      // Check if the error is a response error with data
      if (error.response && error.response.data && error.response.data.error) {
        // Display the specific error message from the server response
        toast.error(error.response.data.error);
      } else {
        // Display a generic error message for other types of errors
        toast.error('An error occurred during registration. Please try again.');
      }
    }
  };

  // JSX structure for the registration form
  return (
    <section className="register-container forms imgg">
      <Toaster />
      <div className="register-form signup">
        <div className="register-form-content">
          <header>Signup</header>

          {/* Form for user registration */}
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input
                type="text"
                placeholder="Username"
                className="input"
                onChange={(e) => handleChangeEvent(e, "name")}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                onChange={(e) => handleChangeEvent(e, "email")}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="text"
                placeholder="Mobile No."
                className="input"
                onChange={(e) => handleChangeEvent(e, "mobile")}
                required
              />
            </div>

            {/* Input field for password with eye icon */}
            <div className="field input-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="password"
                onChange={(e) => handleChangeEvent(e, "password")}
                required
              />
              <i
                className={
                  showPassword ? "bx bx-show eye-icon" : "bx bx-hide eye-icon"
                }
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            <div className="field button-field">
              <button type="submit">Signup</button>
            </div>
          </form>

          {/* Link to the login page */}
          <div className="form-link">
            <span>
              Already have an account?
              <Link to="/login" className="link login-link"> Login</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
