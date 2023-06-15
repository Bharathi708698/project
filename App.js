import './App.css';
import { Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import 'bootstrap/dist/css/bootstrap.min.css';
import OTPVerification from './pages/testing';
import Login from './pages/login';
import Verify from './pages/verify';
import { useState } from 'react';

function App() {
  const [currentForm , setCurrentForm] = useState("login")

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div>
      <Routes>
        
        <Route path='/login' element={currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Verify onFormSwitch = {toggleForm}/>}  />

      </Routes>
    </div>
  );
}

export default App;
