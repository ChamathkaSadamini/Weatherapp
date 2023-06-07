import React from "react";

import {useState} from 'react';
import Week from "../Weeklywather/Week";
export default function Header(){
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
     
      setIsShown(current => !current);
  
    
    };
    const buttonsStyle = {
        width: '100%',
        height: '40px',
        margin: '10px auto',
        color:'#fff',
        background: '#573b8a',
      
      };
  return(
  
    <div>
    <button style={buttonsStyle} onClick={handleClick} >Weather </button>

    {/*show elements on click */}
    {isShown && (
      <div>
        <h2>Weekly Weather</h2>
      </div>
    )}

    {/* show component on click */}
    {isShown && <Week />}
  </div>
  );
}