import React from 'react';
import AllRoutes from './Routes/AllRoutes';
import { UserProvider } from './components/UserContext'; // Adjust the path

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AllRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
