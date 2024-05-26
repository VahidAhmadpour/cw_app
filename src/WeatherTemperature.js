import React, { useState } from "react";
import "./WeatherInfo.css";

export default function WeatherTemp(props) {
  const [unit, displayUnit] = useState(`metric`);

  function convertToFahrenheit(event) {
    event.preventDefault();
    displayUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    displayUnit("metric");
  }

  if (unit === "metric") {
    let celsius = props.celsius;
    return (
      <div className="WeatherTemp">
        <span className="degree-top">{Math.round(celsius)}°</span>
        <span className="unit">
          <a href="www.vahidpic.ir" onClick={convertToCelsius}>
            C{" "}
          </a>{" "}
          |
          <a href="www.vahidpic.ir" onClick={convertToFahrenheit}>
            {" "}
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="degree-top">{Math.round(fahrenheit)}°</span>
        <span className="unit">
          <a href="www.vahidpic.ir" onClick={convertToCelsius}>
            C
          </a>{" "}
          |{" "}
          <a href="www.vahidpic.ir" onClick={convertToFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  }
}
