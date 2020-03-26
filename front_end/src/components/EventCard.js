import React, { Component } from 'react';

const EventCard = props => {

    return (
            <div className="event-card">
                <img src={props.event.images[0]["url"]} alt="event" />
                <p>{props.event.name}</p>
                <p>{props.event._embedded['venues'][0]['name']}</p>
                <p>{props.event.dates["start"]["localDate"]}</p>
                <button onClick={console.log(props.event)}>Add to Tour</button>
            </div>
    )
}

export default EventCard