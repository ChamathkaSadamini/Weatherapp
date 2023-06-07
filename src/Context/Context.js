
import React, { useReducer, useContext } from "react";

import {WeatherReducer} from './Reducer';



const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Colombo", 
    "lat": "6.9344", 
    "lng": "79.8428", 
    "country": "Sri Lanka", 
    "iso2": "LK", 
    "admin_name": "Western", 
    "capital": "primary", 
    "population": "2323826", 
    "population_proper": "752993"
          },
          current:'',
          daily:''
    })

    
    //const APIKEY = ''
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}