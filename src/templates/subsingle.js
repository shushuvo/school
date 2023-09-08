import React from 'react';
import './subsingle.css'

function Subsingle(props){
    return(

    <div className='singlesubcon'> 
     <a href={props.manuename}><div class="subsingleoption">{props.manuename}</div></a>
    </div>

    );
}
export default Subsingle; 