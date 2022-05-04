import React from "react";
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} alt="monster"/>
        <h2 >{ props.monster.name }</h2>
        <p>{ props.monster.email}</p>
        <p>{ props.monster.address.zipcode}</p>
        <p>lat: { props.monster.address.geo.lat}</p>
        <p>long: { props.monster.address.geo.lng}</p>
    </div>
)