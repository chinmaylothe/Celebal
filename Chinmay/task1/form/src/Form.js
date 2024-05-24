import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Form = () => {
  const navigate = useNavigate();

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
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      navigate('/success', { state: { formData } });
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

  const countryCodes = {
    'USA': '+1',
    'Canada': '+1',
    'UK': '+44',
    'Australia': '+61',
    'Germany': '+49'
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleChange} />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
        <br />

        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={handleChange} />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
        <br />

        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} />
        {errors.username && <div className="error">{errors.username}</div>}
        <br />

        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        {errors.email && <div className="error">{errors.email}</div>}
        <br />

        <label>Password:</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <div className="error">{errors.password}</div>}
        <br />

        <label>Country Code:</label>
        <select name="countryCode" onChange={handleChange}>
          <option value="">Select Country Code</option>
          {Object.keys(countryCodes).map((country, index) => (
            <option key={index} value={countryCodes[country]}>
              {country} ({countryCodes[country]})
            </option>
          ))}
        </select>
        {errors.countryCode && <div className="error">{errors.countryCode}</div>}
        <br />

        <label>Phone Number:</label>
        <input type="text" name="phone" onChange={handleChange} />
        {errors.phone && <div className="error">{errors.phone}</div>}
        <br />

        <label>Country:</label>
        <select name="country" onChange={handleChange}>
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
        {errors.country && <div className="error">{errors.country}</div>}
        <br />

        <label>City:</label>
        <select name="city" onChange={handleChange}>
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <div className="error">{errors.city}</div>}
        <br />

        <label>PAN Number:</label>
        <input type="text" name="panNo" onChange={handleChange} />
        {errors.panNo && <div className="error">{errors.panNo}</div>}
        <br />

        <label>Aadhar Number:</label>
        <input type="text" name="aadharNo" onChange={handleChange} />
        {errors.aadharNo && <div className="error">{errors.aadharNo}</div>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
