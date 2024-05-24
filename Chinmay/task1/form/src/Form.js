import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      history.push({
        pathname: '/success',
        state: { formData },
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const aadharRegex = /^\d{12}$/;
    
    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Valid email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    }
    if (!formData.country) {
      errors.country = 'Country is required';
    }
    if (!formData.city) {
      errors.city = 'City is required';
    }
    if (!formData.panNo) {
      errors.panNo = 'PAN number is required';
    }
    if (!formData.aadharNo || !aadharRegex.test(formData.aadharNo)) {
      errors.aadharNo = 'Aadhar number should be 12 digits';
    }
    
    return errors;
  };

  const countries = [
    'USA',
    'Canada',
    'UK',
    'Australia',
    'Germany'
  ];

  const cities = [
    'New York',
    'Toronto',
    'London',
    'Sydney',
    'Berlin'
  ];

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleChange} />
        {errors.firstName && <div>{errors.firstName}</div>}
        
        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={handleChange} />
        {errors.lastName && <div>{errors.lastName}</div>}
        
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} />
        {errors.username && <div>{errors.username}</div>}
        
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        {errors.email && <div>{errors.email}</div>}
        
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        {errors.password && <div>{errors.password}</div>}
        
        <label>Phone Number:</label>
        <input type="text" name="phone" onChange={handleChange} />
        {errors.phone && <div>{errors.phone}</div>}
        
        <label>Country:</label>
        <select name="country" onChange={handleChange}>
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
        {errors.country && <div>{errors.country}</div>}
        
        <label>City:</label>
        <select name="city" onChange={handleChange}>
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <div>{errors.city}</div>}

        <label>PAN Number:</label>
        <input type="text" name="panNo" onChange={handleChange} />
        {errors.panNo && <div>{errors.panNo}</div>}
        
        <label>Aadhar Number:</label>
        <input type="text" name="aadharNo" onChange={handleChange} />
        {errors.aadharNo && <div>{errors.aadharNo}</div>}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
