// profile.jsx

import React, { useContext, useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Profile = () => {
  // State to store user information
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    mobile: "",
    role: ""
  });

  // Accessing user data from context
  const { user } = useContext(UserContext);

  // Update newUser state with actual user data when user context changes
  useEffect(() => {
    // Assuming user object has properties like 'name', 'email', 'mobile', 'role'
    setNewUser({
      username: user.name,
      email: user.email,
      mobile: user.mobile,
      role: user.role
    });
  }, [user]);

  // Navigation hook
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear session and local storage
    sessionStorage.clear();
    localStorage.clear();
    // Navigate to home
    navigate('/');
    // Reload the window to reflect logout changes
    window.location.reload();
  };

  // Rendering the profile component
  return (
    <div className="imgg">
      <div>
        <Header />
      </div>
      <div className="content-container">
        <div className="profile-content">
          {/* Profile heading */}
          <h2 className="profile-heading">PROFILE</h2>
          {/* Horizontal line separator */}
          <hr style={{ borderColor: '#30475E' }} />
          {/* User information table */}
          <div className="table-container">
            <table className="user-information-table">
              <tbody>
                {/* Render table rows for each user property */}
                {renderTableRow("Username", newUser.username)}
                {renderTableRow("Email", newUser.email)}
                {renderTableRow("Role", newUser.role)}
                {renderTableRow("Mobile Number", newUser.mobile)}
              </tbody>
            </table>
          </div>
          {/* Logout button */}
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

// Helper function to render a table row
const renderTableRow = (label, value) => (
  <tr key={label}>
    <td>
      {/* Strong label for table row */}
      <strong>{label}:</strong>
    </td>
    {/* Table data cell with user value */}
    <td className="text-primary">{value}</td>
  </tr>
);

// Exporting the Profile component
export default Profile;
