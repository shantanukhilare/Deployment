import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Welcome, {user && user.email}!</h2>
 
    </div>
  );
};

export default Dashboard;
