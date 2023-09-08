import React from 'react';
import Tophead from '../templates/tophead';
import Galary from '../pictemplates/galary';
import Sidebar from '../sidebar/mainsidebar';
import './home.css'
function Home(){
    return(
      <div >
        <div>
         <Tophead/>
        </div>
        <div className='homepage'>
           <Galary/>
           <Sidebar/>
        </div>
      </div>
    )
}
export default Home;