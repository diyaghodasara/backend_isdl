import React from "react";
import "./tt.css";
import Header from "../Header/Header";

const TT = () => {
  return (
    <div className="tt-img">
    <div>
        <Header />
    </div>
    <div className="bus-timetable-container">
      {/* <h1 className="timetable-heading">Bus Schedule</h1> */}
      <div className="bus-timetable">
      <h2 className="table-heading">Monday To Friday</h2>
        <table className="timetable-table">
          <thead>
            <tr>
              <th className="table-header">Bus No.</th>
              <th className="table-header">From</th>
              <th className="table-header">To</th>
              <th className="table-header">Time</th>
            </tr>
          </thead>
          <tbody className="table-d">
            <tr>
              <td>2</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>7:00 AM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>8:00 AM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              <td>10:00 AM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>11:45 AM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              <td>1:30 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>3:45 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              <td>5:45 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              <td>6:15 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>7:00 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Raja Park</td>
              <td>8:15 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>8:30 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Raja Park</td>
              <td>LNMIIT</td>
              <td>9:15 PM</td>
            </tr>
            
          </tbody>
        </table>
      </div>

      {/* Holidays */}
      <br />

      <div className="bus-timetable">
      <h2 className="table-heading">Saturday, Sunday & Other Holidays</h2>
        <table className="timetable-table">
          <thead>
            <tr>
              <th className="table-header">Bus No.</th>
              <th className="table-header">From</th>
              <th className="table-header">To</th>
              <th className="table-header">Time</th>
            </tr>
          </thead>
          <tbody className="table-d">
            <tr>
              <td>2</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>8:00 AM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              <td>8:30 AM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              <td>10:30 AM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              <td>10:30 AM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Raja Park</td>
              <td>1:00 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Raja Park</td>
              <td>LNMIIT</td>
              
              <td>1:30 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Raja Park</td>
              <td>LNMIIT</td>
              
              <td>3:00 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Raja Park</td>
              <td>4:00 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              <td>5:00 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Raja Park</td>
              <td>LNMIIT</td>
              
              <td>5:15PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>LNMIIT</td>
              <td>Ajmeri Gate</td>
              
              <td>6:15 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              
              <td>7:00 PM</td>
            </tr>

            <tr>
              <td>1</td>
              <td>LNMIIT</td>
              <td>Raja Park</td>
              <td>8:15 PM</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Ajmeri Gate</td>
              <td>LNMIIT</td>
              
              <td>8:30 PM</td>
            </tr>


            <tr>
              <td>2</td>
              <td>Raja Park</td>
              <td>LNMIIT</td>
              <td>9:15 PM</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default TT;
