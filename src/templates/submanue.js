import React,  { useState } from "react";
import "./submanue.css"

function Submanue(props) {
   
  const [menuVisiblesub, setMenuVisiblesub] = useState(false);
  const toggleMenu = () => {
    setMenuVisiblesub (!menuVisiblesub);
  };

    const numberOfItems = props.noi; // You can change this to the desired number of items

    const listItems = [];
    for (let i = 0; i < numberOfItems; i++) {
      var x = `option${i}`;
      var y = props[x];
      listItems.push(
        <div className="everysublistitem" key={i}>
          <a href={y}>{y}</a>
        </div>
      );
    }

  return (
    <div className="submanue">
          <div className="subicon" onClick={toggleMenu}>
          <span className="subspan">{props.manuename}</span>
          <i className={`fas ${menuVisiblesub ? 'fa-minus' : 'fa-plus'}`} onClick={toggleMenu}></i>
          </div>  
          <div className="sublist"style={{ display: menuVisiblesub ? "block" : "none" }}>
            {listItems}
          </div>                
    </div>
  );
}

export default Submanue;
