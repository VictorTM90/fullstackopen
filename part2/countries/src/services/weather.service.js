import axios from "axios";
const apiKey = process.env.REACT_APP_APPI_KEY;

const getWeather = (capital) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`
    )
    .then((response) => {
      const { weather, wind, main } = response.data;

      return {
        weather: weather[0].description,
        wind: wind.speed,
        temp: main.temp,
        icon: weather[0].icon,
        id: weather[0].id,
      };
    });
};

export { getWeather };
