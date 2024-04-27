import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
   
  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor ='#0c2d4f';
    showAlert("Dark mode has been enabled","success");
    document.title="Dark Mode";
  }
  else{
    setMode("light");
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled","success");
    document.title="Light Mode";
  }
  }
  return (
    <>
    <Router>
    <Navbar title="Quick Connect" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
      <Route  exact path="about" element={<About />}>
          </Route>
          <Route exact path="/" element = {<TextFrom  heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}>
          </Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
