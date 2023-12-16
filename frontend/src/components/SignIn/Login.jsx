import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { login as authlogin } from "../Auth/auth"; // Import the login function
import axios from 'axios';

const Login = () => {
  const { userAuth: { token }, setUserAuth, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const fetchAndSetUser = async (email) => {
    try {
      // Make an Axios request to fetch user information
      const response = await axios.post('https://cyan-barnacle-slip.cyclic.app/getUser', {
        email,
      });

      const { success, user, error } = response.data;
      console.log(user);
      if (success) {
        // Update the user state using context
        sessionStorage.setItem("inUser", user);
        localStorage.setItem('inUser', JSON.stringify(user));
        console.log(localStorage);
        setUser(user);
      
      } else {
        console.error('Error fetching user data:', error);
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { success, token, error } = await authlogin(email, password);

      if (success) {
        // Update the userAuth state using context
        setUserAuth({ token });

        // Fetch and set user information
        fetchAndSetUser(email);

        // Navigate to the home page
        navigate('/home');
      } else {
        toast.error(error);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // JSX structure for the login form
  return (
    <section className="login-containers forms imgg">
      <Toaster />
      <div className="login-form login">
        <div className="login-form-content">
          {/* Header indicating this is the login section */}
          <header>Login</header>

          {/* Form for user login */}
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Input field for password with eye icon */}
            <div className="field input-field">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password based on visibility state
                placeholder="Password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={showPassword ? 'bx bx-show eye-icon' : 'bx bx-hide eye-icon'} // Toggle eye icon based on visibility state
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            {/* Button to submit the login form */}
            <div className="field button-field">
              <button type="submit">Login</button>
            </div>
          </form>

          {/* Link to the registration page */}
          <div className="form-link">
            <span>
              Don't have an account?
              <Link to="/register" className="link signup-link"> Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
