import React from "react";
import "./Date.css";


export default function Date(props) {
    const year  = props.date.getFullYear();
    const month = (props.date.getMonth())+1;
    const day   = props.date.getDate(); 

    const date = `${year} - ${month} - ${day}`;
    console.log(date) ;

    return (
        <div className="date">
            {date}
       </div>
    );
}