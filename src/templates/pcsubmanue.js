import React,  { useState } from "react";
import "./submanue.css"
import "./pcsubmanue.css"

function Pcsubmanue(props) {
   
    const numberOfItems = props.noi; // You can change this to the desired number of items
    if(numberOfItems==""){y=props.manuename;}
    const listItems = [];
    for (let i = 0; i < numberOfItems; i++) {
      var x = `option${i}`;
      var y = props[x];
      listItems.push(
        <div className="pcsublistitem"  key={i}>
          <a href={y}>{y}</a>
        </div>
      );
    }

  return (
    <div class="dropdown">
     <a href={y}><button class="dropdown-button" style={{ paddingRight: props.padright }}>{props.manuename} <i className={`fas fa-chevron-down`} style={{ display: props.iconStyle }}></i></button></a>
      <div class="dropdown-content">

    <div className="pcsubmanue">
          <div className="pcsublist">
                {listItems} 
          </div>                        
    </div>

    </div>
      </div>         
  );
}

export default Pcsubmanue;
