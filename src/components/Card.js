import React from 'react';

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card">
        <img
          src={`../images/${props.item.img}`}
          className="card--img"
          alt="cardImg"
        />
        <div className="card--body">
          <div className="card--location">
            <i className="fa-solid fa-location-dot"></i>
            <span className="card--location__country">
              {props.item.location}
            </span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="card--title">{props.item.title}</h1>
          <div className="card--date">
            {props.item.startDate} - {props.item.endDate}
          </div>
          <p className="card--text">{props.item.description}</p>
        </div>
      </div>
      <div className='line-after-card'></div>
    </div>
  );
}
