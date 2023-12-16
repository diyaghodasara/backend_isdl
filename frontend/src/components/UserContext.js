// UserContext.jsx
import { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({});
  const [userbuses, setUserbuses] = useState([]);
  const [selectedbuses, setSelectedbuses] = useState({})
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth, userbuses, setUserbuses, selectedbuses, setSelectedbuses, user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
