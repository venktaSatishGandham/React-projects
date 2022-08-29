import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <img
        src={props.item.imageUrl}
        width="25%"
        alt="card-img"
        className="card-img"
      ></img>
      <div className="second-card-section">
        <div>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8ld48w4pqWxExPcu9kWqYwAAAA%26pid%3DApi&f=1"
            className="location-icon"
            width="15"
          ></img>
          {props.item.title}
          <a href={props.item.googleMapsUrl} target="_blank">
            View On Google Maps
          </a>
        </div>
        <h1>{props.item.title}</h1>
        <div>
          <span>{props.item.startDate}</span>-<span>{props.item.endDate}</span>
        </div>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
export default Card;
