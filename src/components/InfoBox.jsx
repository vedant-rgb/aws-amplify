import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function InfoBox({info}) {
  const SUNNY_URl =
    "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670596899123-c4c67735d77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=2048x2048&w=is&k=20&c=5-0cwKyftzKvHbxdXfJLyvV7Ijm0-lrB1DryXtJcpfg=";

  return (
    <div className=" flex items-center justify-center m-2">
      <Card sx={{ width: "100%", maxWidth: 500, padding: 2, borderRadius: 3, boxShadow: 5 }}>
        {/* Weather Image */}
        <CardMedia
          sx={{ height: 250, borderRadius: 2 }}
          image={info.humidity >80 ? RAIN_URL :info.temp >15? HOT_URL :COLD_URL}
          title="Weather Condition"
          component="img"
        />

        <CardContent>
          {/* Weather Condition */}
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold", textAlign: "center" }}>
            {info.weathercondi}
          </Typography>

          {/* Location Info */}
          <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mt: 1 }}>
            📍 {info.city}, {info.state}, {info.country}
          </Typography>

          {/* Weather Details */}
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>🌡️ Temperature:</strong> {info.temp}°C
            <br />
            <strong>🔼 Max Temp:</strong> {info.tempmax}°C
            <br />
            <strong>🔽 Min Temp:</strong> {info.tempmin}°C
            <br />
            <strong>💧 Humidity:</strong> {info.humidity}%
            <br />
            <strong>🌬️ Wind Speed:</strong> {info.windspeed} m/s
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
