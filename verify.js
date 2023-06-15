import React, { useState, useRef } from "react";
import "../App.css";

const OTPVerification = ( props ) => {
  const [otp, setOtp] = useState("");
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    setOtp((prevOtp) => {
      const newOtp = prevOtp.split("");
      newOtp[index] = value;
      return newOtp.join("");
    });

    // Move to the next input field
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      // Move to the previous input field on backspace
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
  }

  return (
    <div className="otp-container">
      <h2>Verification OTP</h2>
      <form onSubmit={handleSubmit} className="otp-inputs">
        {Array.from({ length: 6 }, (_, index) => (
          <input
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            type="text"
            maxLength="1"
            value={otp[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      
      <button onClick={() => props.onFormSwitch("login")}>verify</button>
      </form>
    </div>
  );
};

export default OTPVerification;
