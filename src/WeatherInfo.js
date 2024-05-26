import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Date from "./Date";
import Recommend from "./Recommend"

import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <div className="top">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <span className="location-city">{props.data.city}</span>
                  <div className="country">{props.data.country}</div>
                  
                </li>
                <li>
                  <WeatherTemperature celsius={props.data.temperature} />
                </li>
                <li>
                  <span>
                    <WeatherIcon code={props.data.icon} size={60} />
                  </span>
                </li>
                <li></li>
              </ul>
            </div>
            <div className="col-3"></div>
          </div>
        </div>

        <div className="mid-01">
          <div className="row">
            <div className="col-4">
              <ul className="clear-button box">
                <li className="whetherStatus">{props.data.description}</li>
                <li className="humidity">
                  <span className="humtitle">Humidity :</span>
                  <span className="humpercent">{props.data.humidity}</span>
                  <span>%</span>
                </li>
                <li className="wind">
                  <span className="windtitle">Wind : </span>
                  <span className="windnumb"> {props.data.wind} </span>
                  <span> Km/h </span>
                </li>
              </ul>
            </div>

            <div className="col-4 ">
              <ul className="clear-button box">
                <li>
                  <span className="time">
                    <FormattedDate date={props.data.date} />
                  </span>
                </li>
                <li> <Date date={props.data.date} /> </li>
            
              </ul>
            </div>
            <div className="col-4 ">
              <ul className="clear-button box">
                <li className="recommend-fix"> Based location weather history, it's better using </li>
                <li className="recommend-var"> <Recommend city={props.data.city}/> </li>
                <li className="recommend-fix1"> Estimate energy generate</li>
                <li className="recommend-var2"> Coming soon feature </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
