import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const togglemode = () => {
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#23294a';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title="Textutils" aboutText="About Textutils" Mode={Mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter the text here" Mode={Mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
      </Router>
      
    </>
  );
}

export default App;
