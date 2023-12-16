import React , {useState, useEffect, useContext }from "react";
import { Route, Routes, Switch, useNavigate} from "react-router-dom";
import Login from "../components/SignIn/Login";
import Home from "../components/Home/Home";
import Register from "../components/SignUp/Register";
import Profile from "../components/Profile/Profile";
import BusCard from "../components/Bus_List/BusCard";
import LandingPage from "../components/Landing_Page/LandingPage";
import SeatSelection from "../components/Seat_Seslection/SeatSelection";
import Ticket from "../components/Ticket/Ticket";
import Dropdown from "../components/Dropdown/Dropdown"; 
import {createContext} from "react";
import { lookInSession } from "../common/session";
import BusList from "../components/Bus_List/BusList"
import Error from "../components/Error"
import { UserContext } from "../components/UserContext"
import TimeTable from "../components/TimeTable/Timetable";

//export const UserContext = createContext({}) 



const AllRoutes = () => {
  const { userAuth, setUserAuth } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    let userInSession = lookInSession('user');
    userInSession ? setUserAuth(userInSession) : setUserAuth({ token: null });
  }, []);

  //const fetchedBuses = buses;
  const { userbuses, setUserbuses } = useContext(UserContext);

  useEffect(() => {
    let busInSession = lookInSession('bus');
    busInSession ? setUserbuses(busInSession) : setUserbuses({ fetchedBuses: null });
  }, []);

  //selectedBuses
  const { selectedbuses, setSelectedbuses } = useContext(UserContext);

  useEffect(() => {
    let s_busInSession = lookInSession('selectedbus');
    s_busInSession ? setSelectedbuses(s_busInSession) : setUserbuses({ bus: null });
  }, []);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    let user = lookInSession('inUser');
    user ? setUser(user) : setUser({ user: null });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} > </Route>
      <Route path='/Home' element={<Home/>} > </Route>
      <Route path='/Login' element={<Login/>} > </Route>
      <Route path='/Register' element={<Register/>} > </Route>
      <Route path='/Profile' element={<Profile/>} > </Route>
      <Route path='/BusCard' element={<BusCard/>} > </Route>
      <Route path='/BusList' element={<BusList/>} > </Route>
      <Route path='/SeatSelection' element={<SeatSelection/>} > </Route>
      <Route path='/Ticket' element={<Ticket/>} > </Route>
      <Route path='/Error' element={<Error/>} > </Route>
      <Route path='/TimeTable' element={<TimeTable/>} > </Route>
    </Routes>
  );
};

export default AllRoutes;
