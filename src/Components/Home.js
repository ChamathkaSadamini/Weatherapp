import React from 'react';
import WeekInfoCardComponents from './WeekInfoCard';
import ChooseStateComponents from './ChooseState';
import HumidityComponents from './HUMIDITY';
import LeftComponents from './Left';
import Header from './Header/Header';

const HomeComponents = ()=>{  
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    } 
    const buttonStyle = {
        width: '20%',
        height: '40px',
        margin: '10px auto',
        color:'#fff',
        background: '#573b8a',
        align: 'right',
    
      };
    return (
        <>
   <h1 >WEATHER APP..</h1>
       
   <button style={buttonStyle} onClick={handleClick}>Logout</button>
            <div className='homeWrap'>
            
            <Header />
                <div className='weatherSection'>
                    <LeftComponents />
                    <div className='rightSide'>
                        <ChooseStateComponents />
                         <WeekInfoCardComponents />
                        <HumidityComponents />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;



