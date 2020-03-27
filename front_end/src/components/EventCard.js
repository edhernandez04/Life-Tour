import React, { Component } from 'react';

const EventCard = props => {



    return (
            <div className="event-card">
                <a href={props.event.url} target="_blank"><img src={props.event.images[0]["url"]} alt="event" /></a>
                <a href={props.event.url} target="_blank"><p>{props.event.name}</p></a>
                <p>{props.event._embedded['venues'][0]['name']}</p>
                <p>{props.event.dates["start"]["localDate"]}</p>
                <select onChange={props.selectHandler}>
                    <option value="null">None</option>
                    {props.tours.map(tour => {
                        return <option value={tour.id}>{tour.title}</option>
                    })}
                </select>
                <button onClick={() => props.addTourHandler(props.event)}>Add to Tour</button>
            </div>
    )
}

export default EventCard