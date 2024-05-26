import React, { useState, useEffect } from "react";
import "./WeatherInfo.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherForcastDay from "./WeatherForcastDay";
import axios from "axios";

export default function WeatherForcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forcast, setForcast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.latitude]);

  function handelRespons(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const lat = props.latitude;
    const lon = props.longitude;
    const apiKey = "467056bta9bca10b1ob3b3c4101a5b4f";
    const unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handelRespons);
  }

  if (loaded) {
    return (
      <div>
        <div className="days">
          {forcast.map(function (dailyForecast, index) {
            if (0 < index && index < 7) {
              return (
                <div key={index}>
                  <WeatherForcastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
