// CardInfo.jsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardInfo({ weather }) {
const imageUrl =
    weather.weather?.toLowerCase() === 'clear'
        ? '/weatherImage.jpg'
        : weather.weather?.toLowerCase() === 'rain'
        ? '/weatherImage.jpg'
        : weather.weather?.toLowerCase() === 'clouds'
        ? '/weatherImage.jpg'
        :  '/weatherImage.jpg'
;  // fallback

    return (
        <Card
            sx={{
                maxWidth: 345,
                margin: "20px auto",
                borderRadius: "12px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                backgroundColor: "#f0f8ff"
            }}
        >
            <CardMedia
                component="img"
                height="160"
                image={imageUrl}
                alt="weather image"
                sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                }}
            />
            <CardContent sx={{ padding: "16px" }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
                    City: {weather.city}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "16px" }}>
                    Temp: {weather.temp}°C <br />
                    Temp Min: {weather.tempMin}°C <br />
                    Temp Max: {weather.tempMax}°C <br />
                    Humidity: {weather.humidity}% <br />
                    Feels Like: {weather.feelsLike}°C <br />
                    Description: {weather.weather}
                </Typography>
            </CardContent>
        </Card>
    );
}
