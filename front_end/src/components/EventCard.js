import React, { Component } from 'react';

const EventCard = props => {

    // const picture = props.event.images

    return (
        <div className="event-card">
            <img src={props.event.images[0]["url"]} alt="event" />
            <p>{props.name}</p>
        </div>
    )
}

export default EventCard