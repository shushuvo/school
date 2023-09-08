import React from "react";
import "./tophead.css"
import Head from "./head"
import logo from "./logo.png"
function Tophead() {
    return (
      <div>
      <div className="tophead">
      <div class="logobaznabocon">
       <div class="logocon"> 
       <div class="logo">
        <img src={logo}/>
      </div>
      </div>
      <div class="baznabo">
       <h1 >Baznabo Abul Faiz Molla High School</h1>
       <h3>Education | Discipline | Morality</h3>
       </div>
       </div>
       <Head/>
      </div>
      </div>
    );
  }
  
  export default Tophead;