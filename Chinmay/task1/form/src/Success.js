
// Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="container">
      <h1>Success</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>PAN Number: {formData.panNo}</p>
      <p>Aadhar Number: {formData.aadharNo}</p>
    </div>
  );
};

export default Success;
