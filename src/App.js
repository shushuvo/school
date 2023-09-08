import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Admission from './pages/admission';
import Class6 from './pages/class6';
import Contactus from './pages/contactus';
import Exam from './pages/exam';
import Notice from './pages/notice';
import Payment from './pages/payment';
import Curriculum from './pages/curriculum';
import Welcome from './pages/welcomenote';
import Videogallery from './pages/videogallery';
import Photogallery from './pages/photogallery';
import Governingbody from './pages/governingbody';
import Routine from './pages/routine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/> 
        <Route path="/About Us" element={<Aboutus/>}/>
        <Route path="/Admission" element={<Admission/>}/>
        <Route path="/Class" element={<Class6/>}/>
        <Route path="/Contact Us" element={<Contactus/>}/>
        <Route path="/Exam Result" element={<Exam/>}/>
        <Route path="/Notice" element={<Notice/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Routine" element={<Routine/>}/>
        <Route path="/Curriculum" element={<Curriculum/>}/>
        <Route path="/Welcome Note" element={<Welcome/>}/>
        <Route path="/Video Gallery" element={<Videogallery/>}/>
        <Route path="/Photo Gallery" element={<Photogallery/>}/>
        <Route path="/Governing Body" element={<Governingbody/>}/>
      </Routes>
    </Router>
  );
}

export default App;
