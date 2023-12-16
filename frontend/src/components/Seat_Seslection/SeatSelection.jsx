import React, { useState, useContext } from "react";
import "./seatselection.css";
import Header from "../Header/Header";
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';


const SeatSelection = () => {
  const { userAuth, userAuth: { token, profile_img } } = useContext(UserContext);
  const {user} = useContext(UserContext);
  const {selectedbuses, selectedbuses: selectedBus } = useContext(UserContext);
  const [gentoken, setgentoken] = useState("")
  const navigate = useNavigate();
  const rows = 10;
  const seatsPerRow = 4;

  const generateSeatId = (row, seat) => `${row}${String.fromCharCode(65 + seat)}`;

  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleCheckboxChange = (row, seat) => {
    const seatId = generateSeatId(row, seat);
    setSelectedSeat(seatId);
    console.log("Selected Seat:", seatId,JSON.stringify(user));
  };
  console.log(JSON.stringify(user._id));

  const handleToken = async () => {
    try {
      // const response = await axios.post(
      //   'http://localhost:8080/stripePayment',
      //   {
      //     token,
      //     selectedSeat,
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
        // console.log(token);
        const bookingResponse = await axios.post(
          'https://cyan-barnacle-slip.cyclic.app/booking',
          {
            busId: selectedBus._id,
            seatNo: selectedSeat,
            userId: user._id,
            username: user.name,
            date: selectedBus.date,
            time: selectedBus.time,
            busNo: selectedBus.busID
           // userID: token.user,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Booking Response:', bookingResponse.data);
        console.log(localStorage);
        navigate('/ticket');
    } catch (error) {
      console.error('Error making payment:', error.message);
    }
  };
  

  return (
    <div className="back">
      <div>
        <Header />
      </div>
      <div className="plane">
        <div className="cockpit">
          <h1>PLEASE SELECT A SEAT</h1>
        </div>
        <div className="exit"></div>
        <ol className="cabin fuselage">
          {Array.from({ length: rows }, (_, row) => (
            <li key={`row-${row + 1}`} className={`row row--${row + 1}`}>
              <ol className="seats" type="A">
                {Array.from({ length: seatsPerRow }, (_, seat) => (
                  <li key={`seat-${row + 1}-${seat}`} className="seat">
                    <input
                      type="checkbox"
                      id={generateSeatId(row + 1, seat)}
                      checked={generateSeatId(row + 1, seat) === selectedSeat}
                      onChange={() => handleCheckboxChange(row + 1, seat)}
                    />
                    <label htmlFor={generateSeatId(row + 1, seat)}>{generateSeatId(row + 1, seat)}</label>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
        <div className="plane">
          {selectedSeat && (
            <div className="pay-now-popup">
              {token ? (
                
                  <a onClick ={async()=>{
                    await handleToken()
                  }}href="https://buy.stripe.com/test_00g2ad1j9bxV5NufYY" className="pay-now">Pay Now</a>
               
              ) : (
                <Link to="/Login" className="harshit">
                  <i className="ri-login-box-line"></i> Login
                </Link>
              )}
              <div className="para">
                <p>Seat: {selectedSeat}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
