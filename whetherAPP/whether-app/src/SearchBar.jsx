import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './App.css'

export default function SearchBar({ updateInfo }) {
    const [cityData, setCity] = useState("");
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const API = "ff09081378da13d857354896f2a9732b"; // use .env in real apps

    const weatherInfo = async () => {
        try {
            const response = await fetch(`${URL}${cityData}&appid=${API}&units=metric`);
            const jsonResponse = await response.json();

            if (response.ok) {
                const result = {
                    city: jsonResponse.name,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].main // Clear, Rain, etc.
                };
                updateInfo(result);
            } else {
                alert(`Error: ${jsonResponse.message}`);
            }
        } catch (error) {
            console.error("Fetch failed:", error);
            alert("Failed to fetch weather data.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!cityData.trim()) return;
        await weatherInfo();
        setCity("");
    };

    return (
        <div className="search-container">
            <h1 className="title">🌤️ Weather Finder</h1>
            <form onSubmit={handleSubmit} className="form">
                <TextField
                    id="outlined-basic"
                    label="Enter City"
                    variant="outlined"
                    value={cityData}
                    onChange={(e) => setCity(e.target.value)}
                    className="input"
                />
                <Button variant="contained" type="submit" className="button">
                    Search
                </Button>
            </form>
        </div>
    );
}
