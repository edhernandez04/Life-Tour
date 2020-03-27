import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TourCard = props => {

    

    return (
            <div className="tour-card" onClick={() => props.selectedTour(props.tour)}>
                <img src={props.tour.tour_pic} alt={props.tour.title}/>
                <h1>{props.tour.title}</h1>
            </div>
    )
}

export default TourCard