import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const {state} = useLocation();
    const { user } = state;
  return (
    <div>
      <h2>Welcome, {user.userName}!</h2>
      <p>User Role: {user.role}</p>
      <p>Experience: {user.experience} Years</p>
      <p>Level: {user.level}</p>
      {/* Add more user data to display as needed */}
    </div>
  );
};

export default Dashboard;
