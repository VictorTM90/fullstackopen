import React, { useEffect, useState } from "react";
import { getWeather } from "../services/weather.service";

export const Weather = ({ capital }) => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (capital) {
      getWeather(capital).then((response) => {
        console.log(response);
        setWeather(response);
      });
    }
  }, []);

  return (
    <section>
    <h2>Weather</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.weather}
        style={{ with: "40px", heigth: "40px" }}
      />
      <p>{weather.weather}</p>
      <p>temp: {weather.temp}</p>
      <p>wind:{weather.wind}</p>
    </section>
  );
};
