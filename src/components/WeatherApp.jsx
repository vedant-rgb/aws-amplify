import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
function WeatherApp() {

    const [WeatherInfo, setWeatherInfo] = useState({city: "Nashik",
        state: "Maharashtra",
        country: "IN",
        humidity: 20,
        temp: 29.56,
        tempmax: 32.0,
        tempmin: 27.0,
        windspeed: 3.55,
        weathercondi: "Cloudy",})

        let updateInfo = (newinfo) => {
            setWeatherInfo(newinfo);
        }
  return (
    <div className='min-h-screen bg-gray-200'>
        <h2 className='text-center font-bold '>WeatherApp by Atul</h2>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info={WeatherInfo}/>
    </div>
  )
}

export default WeatherApp
