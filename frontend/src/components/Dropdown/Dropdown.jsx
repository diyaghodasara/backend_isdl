import React, { useState } from 'react';
import './dropdown.css';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromSession } from '../../common/session';

const DropdownComponent = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    // Clear session storage
    console.log(sessionStorage)
    
    navigate('/');
    window.location.reload();
    };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };


  return (
    <div className="dropdown">
      <div
        className="dropdown-button"
        onMouseEnter={handleMouseEnter}
        onClick={handleMouseLeave}
      >
      <i class="ri-user-line"></i>
      </div>
      {isMenuOpen && (
        <ul id="menu" className="dropdown-menu">
            <li>
              <Link to="/profile">
                <span className="log-o">Profile  </span>
                </Link>
            </li>
            {/* <li>
              <a href="#">History</a>
            </li> */}
            <li>
              <button onClick={handleLogout}  className="log-o">
              <span className="log-o">LogOut  </span>
                </button>
            </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;