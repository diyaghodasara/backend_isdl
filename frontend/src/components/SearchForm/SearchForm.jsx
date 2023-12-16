import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './searchform.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { UserContext } from '../UserContext';

const SearchForm = () => {
  const [destination, setDestination] = useState('');
  let {userbuses:{ fetchedBuses }, setUserbuses } = useContext(UserContext);
  useContext(UserContext);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [finalDate, setFinalDate] = useState('');

console.log(finalDate);
  // const date = format(new Date(), 'yyyy-MM-dd', {
  //   timeZone: 'utc',
  // });
  const handleDate = (date) => {
      
    
    setStartDate(date);
    // const formattedDate = 
    // setStartDate(formattedDate);
    // console.log("Formatted Date:", startDate);
    // localStorage.setItem("date", formattedDate);
   
    //const dateString = "Thu Nov 30 2023 00:00:00 GMT+0530 (India Standard Time)";
      const d = date;

      // Add 5:30 to the time
      d.setMinutes(d.getMinutes() + 330);

      // Convert the Date object to ISO8601 format
      const formattedDate = d.toISOString().split('T')[0];

     // console.log(formattedDate);
      setFinalDate(formattedDate);
};

  const handleToCity = (e) => {
    e.preventDefault();
    const selectedDestination = e.target.value;
    setDestination(selectedDestination);
    localStorage.setItem('destination', e.target.value);
  };

  const getBuses = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://cyan-barnacle-slip.cyclic.app/search', {
        destination,
        date:finalDate,
      });

      const { status, fetchedBuses } = response.data;

      if (status) {
          // Update the buses state using context
          sessionStorage.setItem("bus", {fetchedBuses});
          console.log(localStorage);
          //console.log(fetchedBuses);
          setUserbuses({fetchedBuses});
          // Use the navigate function to redirect to the /buslist route
          navigate('/buslist');
      } else {
        console.error('Error while fetching buses:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="custom-search-form">
      <h2>Find Your Bus</h2>
      <form className="custom-form">
        <div className="custom-form-group">
          <div htmlFor="to" className="custom-label">
            Destination:
          </div>
          <select
            id="to"
            name="to"
            onChange={(e) => handleToCity(e)}
            required
            className="custom-input"
          >
            <option value="">Select a Destination</option>
            <option value="rajapark">Raja Park</option>
            <option value="ajmeri gate">Ajmeri Gate</option>
            <option value="lnmiit">LNMIIT</option>
          </select>
        </div>

        <div className="custom-form-group">
          <div htmlFor="departure-date" className="custom-label">
            Departure Date:
          </div>
          <DatePicker 
                        selected={startDate} 
                        onChange={(date) => handleDate(date)} 
                        minDate={new Date()}
                        className="custom-input"
                        dateFormat="yyyy-MM-dd"  // Set the desired date format
                        placeholderText="Select a date"
                        popperPlacement="bottom-end"
                    />

                    <FaCalendarAlt className="calendar-icon" />
          </div>


        {/* Use onClick to call the getBuses function when the button is clicked */}
        <button type="button" onClick={(e) => getBuses(e)} className="custom-button">
          Search Buses
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
