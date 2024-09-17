import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast ";
import EnergyCalculation from "./EnergyCalculation" ;
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
      latitude: response.data.coordinates.latitude,
      longitude: response.data.coordinates.longitude,
      data: response.data,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "467056bta9bca10b1ob3b3c4101a5b4f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container container-sm">
        <div className="main">
        <div className="search">
                <form className="search-form" onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Enter a city name ..."
                    className="searchbox"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="button-search"
                  />
                    <input
                    type="submit"
                    value="Login or Register"
                    className="button-search"
                  />
                </form>
              </div>
          <WeatherInfo data={weatherData} />
          <div className="forcast">
            <WeatherForcast
              latitude={weatherData.latitude}
              longitude={weatherData.longitude}
            />
          </div>
          <div>
            <EnergyCalculation />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
