import React, { useEffect, useContext, useState } from "react";
import "./ticket.css";
import axios from "axios";
import Header from "../Header/Header";
import { UserContext } from "../../components/UserContext";

const Ticket = () => {
  const { setUser } = useContext(UserContext);
  const [ticketData, setTicketData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Retrieve user and selectedBus from local storage
  const storedUser = JSON.parse(localStorage.getItem('inUser'));
  const storedSelectedBus = JSON.parse(localStorage.getItem('selectedBus'));

  const fetchTicketData = () => {
    // Check if user and selectedBus exist in local storage
    if (!storedUser || !storedSelectedBus) {
      console.error('User or selectedBus is not available in local storage.');
      return (<div>No ticket</div>);
    }

    axios
      .post('https://cyan-barnacle-slip.cyclic.app/ticket', {
        userId: storedUser._id,
        busId: storedSelectedBus._id,
      })
      .then((ticketResponse) => {
        //const { status, Response} = ticketResponse.data;
        //console.log(Response);
        setTicketData(ticketResponse.data.latestBookedBus);
        console.log(ticketResponse.data.latestBookedBus);
        //setLoading(false);
        // Set loading to false after successful data retrieval
      })
      .catch((error) => {
        console.error('Error fetching ticket data:', error);
        setError('Error fetching ticket data. Please try again.'); // Set error state
        //setLoading(false); // Set loading to false in case of an error
      });
  };

  useEffect(() => {
    fetchTicketData();
  }, []);
  
  return (
    <div className="imgg">
      <div>
        <Header />
      </div>
      <div className="wrapper_ticket">
        <div className="boarding-ticket">
          <div className="ticket-header">Bus Ticket</div>

          {/* {loading && <div>Loading...</div>} */}
         
            <div className="ticket-content">
              <div className="ticket-description">
                <span>Date: {ticketData?.date} <br /><br />Time: {ticketData?.time}</span>
              </div>

              <div className="ticket-line">
                <div className="input-field">
                  <div className="input-placeholder">{ticketData?.username}</div>
                </div>

                {/* <div className="input-field">
                  <div className="input-placeholder">User ID: {ticketData?.userId}</div>
                </div> */}
              </div>

              <div className="ticket-line">
                <div className="input-field">
                  <div className="input-placeholder"> {ticketData?.busNo}</div>
                </div>

                <div className="input-field">
                  <div className="input-placeholder">Seat - {ticketData?.seatNo}</div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Ticket;
