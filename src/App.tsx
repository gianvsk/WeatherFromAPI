import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './hooks/CustomHook';
import { useWeather, } from './hooks/CustomHook';


function App() {

  const [city, setCity] = useState("Catania");
  const [cities,setCities, ] = useWeather(city);

  return (
    <div className="App">
      <form>
        <label>City</label>
        <input type="text" onChange={(e) => setCity(e.target.value)}/>
        <button style={{width:30, height:30}}></button>
        {cities && <h2>{cities.weather[0].description} , {cities.weather[0].icon}, {cities.weather[0].id}</h2>}
      </form>
    </div>
  );
}

export default App;
