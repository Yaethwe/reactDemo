import React from "react";
import "./Tools.css";


const Card = ({title="default title", context="default context", link="https://yeaethawe.netlify.app"}) => (
    <div className="card">
        <h1>{title}</h1>
        <p>{context}</p>
        <a href={link}>{link}</a>
    </div>
);

export default Card;