import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const formData = location.state.formData;

  return (
    <div>
      <h1>Registration Successful!</h1>
      <h2>Details:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>Phone Number: {formData.phone}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>PAN Number: {formData.panNo}</p>
      <p>Aadhar Number: {formData.aadharNo}</p>
    </div>
  );
};

export default Success;
