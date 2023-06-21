import React from 'react'

const login = (props) => {
  return (
    <div>
        <input type='text' placeholder='MobileNumber' maxLength={10} />
        <button onClick={() => props.onFormSwitch("verify")}>Get Otp</button>
    </div>
  )
}
/*
const request = require('request');

function makeAPICall() {
  // Set the start time in epoch format
  const startTime = Math.floor(Date.now() / 1000);

  // Make your API call here
  request('http://api.example.com', (error, response, body) => {
    // Calculate the elapsed time in seconds
    const elapsedTime = Math.floor(Date.now() / 1000) - startTime;

    if (elapsedTime >= 30) {
      // If the elapsed time exceeds 30 seconds, handle the timeout
      console.log('API call timed out');
    } else {
      // Handle the API response
      console.log('API call successful');
      console.log(body);
    }
  });
}

// Set a timeout for 30 seconds
const timeout = setTimeout(() => {
  console.log('API call timed out');
}, 30000);

// Make the API call
makeAPICall();

// Clear the timeout if the API call finishes before the timeout period
clearTimeout(timeout);
*/

/*
 const currentEpochTime = Math.floor(Date.now() / 1000); // Current time in seconds
 const offset = 10 * 60; // 10 minutes in seconds
const targetEpochTime = currentEpochTime + offset;
 const timeoutDuration = 30 * 1000; // 30 seconds in milliseconds
const timer = setTimeout(() => {
  // This code will be executed after 30 seconds
  console.log('Time limit reached!');
}, timeoutDuration);
 const remainingTime = targetEpochTime - currentEpochTime; // Remaining time in seconds
 if (remainingTime >= timeoutDuration / 1000) {
  const cancelTimeout = setTimeout(() => {
    clearTimeout(timer); // Cancel the timer
    console.log('Time limit canceled!');
  }, remainingTime * 1000);
}
*/
export default login
