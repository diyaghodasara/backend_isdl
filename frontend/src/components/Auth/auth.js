import axios from 'axios';

const API_URL = 'https://cyan-barnacle-slip.cyclic.app'; // Update this with your backend API URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const { token, name } = response.data;
    sessionStorage.setItem("user", JSON.stringify({ token, name }));
    
    return { success: true, token };
  } catch (error) {
    return { success: false, error: "Invalid email or password" };
  }
};

export const logout = () => {
  
};

export const isAuthenticated = () => {
  const user = sessionStorage.getItem("user");
  console.log(user)
  return user ? JSON.parse(user) : null;
  
};