import React, { useState, useEffect } from "react";
import './mainsidebar.css'

function Sidebar(){


    const [menuVisiblesub, setMenuVisiblesub] = useState(false);
  const toggleMenu = () => {
    setMenuVisiblesub (!menuVisiblesub);
  };

    return(
    
        <div className="mainsidebarcon">
            <div className="sidebar1">
            <div className="mainsidebar">
                  <img src="https://amarmp.com/propic/profile/621_1480113374.png"/>
                  <div class="rich-text">
                        <div class="decorative-name">Md. Shirajul Islam Mollah</div>
                  </div>
            </div>
            <div className="chairmenmessage">
            <p>Dear School Community,</p>

            I want to express my gratitude for your support. Our school's success relies on dedicated teachers, supportive parents, and eager students.

            My commitment as Chairman is to maintain high educational standards and ensure an enriching environment. Teachers, continue your excellent work. Parents, stay engaged. Students, aim high.

            Together, we'll nurture future leaders. Thank you for being part of our journey.

            <p>Best regards,</p>

            <p>Abul Faiz Mollah</p>
            <p>Chairman, Banznabo Abul Faiz Molla High School</p>
            </div>
            </div>
            <div className="sidebar2">
            <div className="mainsidebar" onClick={toggleMenu}>
                  <img src="https://amarmp.com/propic/profile/621_1480113374.png"/>
                  <div class="rich-text">
                        <div class="decorative-name">Md. Shirajul Islam Mollah</div>
                  </div>
            </div>
            <div className="chairmenmessage" style={{display: menuVisiblesub ? "block" :"none"}} onClick={toggleMenu}>
            <p>Dear School Community,</p>

            I want to express my gratitude for your support. Our school's success relies on dedicated teachers, supportive parents, and eager students.

            My commitment as Chairman is to maintain high educational standards and ensure an enriching environment. Teachers, continue your excellent work. Parents, stay engaged. Students, aim high.

            Together, we'll nurture future leaders. Thank you for being part of our journey.

            <p>Best regards,</p>

            <p>Abul Faiz Mollah</p>
            <p>Chairman, Banznabo Abul Faiz Molla High School</p>
            </div>
            </div>
        </div>

    )

}
export default Sidebar;