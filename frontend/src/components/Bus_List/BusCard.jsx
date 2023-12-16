// // BusCard.jsx
import React, { useContext, useEffect } from 'react';
import './buscard.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserContext"
import Header from '../Header/Header';

const BusCard = ({ bus }) => {
  let {selectedbuses, setSelectedbuses } = useContext(UserContext);
  useContext(UserContext);
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    // Step 4: Save the selected bus to sessionStorage
    sessionStorage.setItem("selectedBus", selectedbuses);
    localStorage.setItem('selectedBus', JSON.stringify(bus));
    console.log(localStorage);
    // Step 5: Update the context with the selected bus
    setSelectedbuses(bus);

    // Step 6: Navigate to the seat selection page
    navigate('/seatselection');
  };
  

  return (
    <div className="bus-booking-card">
      <div className="card-head">
        <div className="bus-route">
          <i className="ri-map-pin-2-fill" style={{ fontSize: '30px' }}></i>
          <div className="arrival-city">{bus.destination.toUpperCase()}</div>
        </div>
      </div>
      <div className="card-body">
        <div className="bus-details">
          <div className='tag3'>
            <div className="tag1">
              <div className="out">Time :</div>
              <div className="departure-time">{bus?.time}</div>
            </div>
            <div className="tag2">
              <div className="out">Available Seats :</div>
              <div className="bus-seats">{bus.availableSeats}</div>
            </div>
          </div>
          <div className="booking-cta">
            <button className="book-now" onClick={handleBookNowClick}>
              {/* <Link to="/seatselection" className="book-text">
                
              </Link> */}
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
