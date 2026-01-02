import SearchBar from './SearchBar';
import CardInfo from './CardInfo';
import { useState } from 'react';
import './App.css'; // 🔥 Import CSS here

export default function WeatherApp() {
    const [weather, setWeather] = useState({
        city: "Delhi",
        temp: 20.2,
        tempMin: 25.50,
        tempMax: 35.20,
        humidity: 48,
        feelsLike: 22.39,
        weather: "haze"
    });

    const updateInfo = (result) => {
        setWeather(result);
    };

    return (
        <div className="weather-app">
            <SearchBar updateInfo={updateInfo} />
            <CardInfo weather={weather} />
        </div>
    );
}
