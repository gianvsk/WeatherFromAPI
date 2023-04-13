import axios from "axios";
import { useEffect, useState } from "react";
const apiKey = "77eaa711dfafa500993527722086ed49";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;

export type City = {
    coord: {
       lon: number,
       lat: number,
    },
    weather: [
      {
        id: number,
        main: string,
        description: string,
        icon: string
      }
    ],
    base : string,
    main : {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number
    },
    visibility: number,
    wind: {
      speed: number,
      deg: number,
      gust: number
    },
    clouds: {
      all: number
    },
    dt: number,
    sys: {
      type: number,
      id: number,
      country: string,
      sunrise: number,
      sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
  }

export const useWeather = (town : string) => {
    const [city, setCity] = useState<City>();
    const [isLoading, setLoading] = useState<boolean>(false);

useEffect(() => {
    setLoading(false)
    fetch(`${url}&q=${town}`)
    .then((response) => { if(!response.ok)
                         throw new Error(`${response.status}`)
                         return response.json()})
    .then((data) => { console.log(data)
                      setLoading(true)
                      setCity(data)})
    .catch((error) => {
      if(error.message === "404")
      console.log(`Errore ${error.message}.Città non trovata`)
      if(error.message === "400") 
      console.log(`Error ${error.message}. Nessun dato inserito`)
      })

 }, [town] );

 return [city, setCity, isLoading] as [City, Function, boolean];
}