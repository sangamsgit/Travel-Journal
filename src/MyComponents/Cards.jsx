import React  from "react";

export default function Cards(props){
    return(
        <section className="content">
            <img className="main-photo" src={`../images/${props.coverImg}`}/>
            <div className="photo-details">
            <span className="bold"><img className="location-indicator" src="../images/location-indicator.png"/>{props.country}</span>
            <a  className="gap" target="_blank" href={props.Maplink}>View in google maps</a>
            <h2>{props.title}</h2>
            <p className="bold ">{props.date.start} - {props.date.end}</p>
            <div className="description">
            <p>{props.description}</p>
            </div>
            </div>
        </section>
    )
}