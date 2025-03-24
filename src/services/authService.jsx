const API_URL = 'http://192.168.32.233/api/farmer_dashboard';

export const signUp = async (userData) => {
  const response = await fetch(`${API_URL}/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// export const login = async (credentials) => {
//   const response = await fetch(`${API_URL}/login/`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials),
//   });
//   const data = await response.json();

//   if (data.token) {
//     localStorage.setItem('authToken', data.token);
//   }

//   return data;
// };

// export const getToken = () => localStorage.getItem('authToken');

// export const logout = () => {
//   localStorage.removeItem('authToken');
// };

// export const isAuthenticated = () => !!getToken();
