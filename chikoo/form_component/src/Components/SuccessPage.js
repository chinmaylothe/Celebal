import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const { personData } = location.state || {};

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
    </div>
  );
};

export default SuccessPage;
