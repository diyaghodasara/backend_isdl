// BusList.jsx
import React, { useContext } from 'react';
import BusCard from './BusCard';
import { UserContext } from '../UserContext';
import Header from '../Header/Header';
import './buslist.css';

const BusList = () => {
  const { userbuses, userbuses:{ fetchedBuses } } = useContext(UserContext);
  console.log(localStorage);

  if (!fetchedBuses || fetchedBuses?.length === 0) {
    console.log('No buses');
    return (
      <div className="imgg">
        <div>
          <Header />
        </div>
        <div className="center-box">
          <p className="erro">No Buses Found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
     <div className='imggg'>
        <Header/>
      {fetchedBuses?.map((bus) => (
        <BusCard key={bus._id} bus={bus} />
      ))}
      </div>
    </div>
  );
};

export default BusList;
