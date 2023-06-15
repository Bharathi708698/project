import React from 'react'

const login = (props) => {
  return (
    <div>
        <input type='text' placeholder='MobileNumber' maxLength={10} />
        <button onClick={() => props.onFormSwitch("verify")}>Get Otp</button>
    </div>
  )
}

export default login