import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForcastDay(props) {
  function maxTmep() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }

  function minTmep() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="day-part">
        <div className="day-name">{day()}</div>
        <div className="day_img">
          <WeatherIcon code={props.data.condition.icon} size={36} />
        </div>
        <div className="day-tepm">
          <span className="tempmax">{maxTmep()}</span> |
          <span className="tempmin"> {minTmep()}</span>
        </div>
      </div>
    </div>
  );
}
