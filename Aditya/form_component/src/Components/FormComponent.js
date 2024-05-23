import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const FormComponent = () => {
  const [personData, setPersonData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonData({ ...personData, [name]: value });
    
    // Validate fields on change
    setErrors({ ...errors, [name]: !value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(personData).forEach((field) => {
      if (!personData[field]) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(personData);
      navigate("/success", { state: { personData } });
    }
  };

  const isSubmitDisabled = () => {
    return Object.values(personData).some((value) => !value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {["firstName", "lastName", "userName", "email", "password", "phoneNo", "panNo", "aadharNo"].map((field) => (
          <div key={field}>
            <label>
              {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              <input
                type={field === "password" ? "password" : field === "email" ? "email" : "text"}
                name={field}
                value={personData[field]}
                onChange={handleChange}
                required
              />
              {errors[field] && <span style={{ color: 'red' }}>This field is required</span>}
            </label>
            <br />
          </div>
        ))}
        
        <label>
          Country:
          <select
            name="country"
            value={personData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <span style={{ color: 'red' }}>This field is required</span>}
        </label>
        <br />
        
        <label>
          City:
          <select
            name="city"
            value={personData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          {errors.city && <span style={{ color: 'red' }}>This field is required</span>}
        </label>
        <br />
        
        <button type="submit" disabled={isSubmitDisabled()}>Submit</button>
      </form>
    </>
  );
};

export default FormComponent;
