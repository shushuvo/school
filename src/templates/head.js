import React, { useState } from "react";
import "./head.css";
import  Pcsubmanue from "./pcsubmanue"
import Submanue from "./submanue";
import Subsingle from "./subsingle";

function Head() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
    <div className="headcon">
    <div className="head">
      <Pcsubmanue noi={0} manuename="Home" iconStyle="none" padright="15px"/>
      <Pcsubmanue noi={4} manuename="At a Glance" option0="Welcome Note" option1="About Us" option2="Governing Body" option3="Curriculum"/>
      <Pcsubmanue noi={0} manuename="Class" iconStyle="none" padright="15px"/>
      <Pcsubmanue noi={2} manuename="Gallery" option0="Photo Gallery" option1="Video Gallery"/>
      <Pcsubmanue noi={0} manuename="Notice" iconStyle="none" padright="15px"/>
      <Pcsubmanue noi={0} manuename="Routine" iconStyle="none" padright="15px"/>
      <Pcsubmanue noi={0} manuename="Exam Result" iconStyle="none" padright="15px"/>
      <Pcsubmanue noi={0} manuename="Payment" iconStyle="none" padright="15px"/>
      <Pcsubmanue noi={0} manuename="Admission" iconStyle="none" padright="15px"/>
      <Pcsubmanue noi={0} manuename="Contact Us" iconStyle="none" padright="15px"/>
    </div>
    </div>

     <div className="head2con">
     <div className="head2">
        <div className="head2button" onClick={toggleMenu}>
          <i className={`fas ${menuVisible ? 'fa-times' : 'fa-bars'}`}></i>
          <span className="buttonmenu">&nbsp;|&nbsp;Menu</span>    
        </div>
        <div class="mobdropdown-content" style={{ display: menuVisible ? "block" : "none" }}>          
            <Subsingle manuename="Home"/>
            <Submanue  noi={4} manuename="At a Glance" option0="Welcome Note" option1="About Us" option2="Governing Body" option3="Curriculum"/>
            <Subsingle manuename="Class"/>
            <Submanue noi={2} manuename="Gallery" option0="Photo Gallery" option1="Video Gallery"/>
            <Subsingle manuename="Notice"/>
            <Subsingle manuename="Routine"/>
            <Subsingle manuename="Exam Result"/>
            <Subsingle manuename="Payment"/>
            <Subsingle manuename="Admission"/>
            <Subsingle manuename="Contact Us"/>
        </div> 
     </div>
     </div> 
     
    </div> 
  );
}

export default Head;
