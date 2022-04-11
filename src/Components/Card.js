import React from "react";
import Button from "./Button";
import "../Style/button.css";

function Card({ title, imageURL, text, hyperlink, hyperlinktext }) {
  return (
    <div className="container">
      <div className="container-image">
        <img src={imageURL} />
      </div>
      <div className="container-title">
        <h3>{title}</h3>
      </div>
      <div className="container-text">
        <p>{text}</p>
      </div>
      <Button type="info">
        <a href={hyperlink}> {hyperlinktext} </a>
      </Button>
    </div>
  );
}

export default Card;
