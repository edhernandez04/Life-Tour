import React, { Component } from 'react';
import TourPage from './TourPage'

const TourCard = props => {

    return (
            <div className="tour-card">
                <img src={props.tour.tour_pic} alt={props.tour.title} onClick={() => props.handleTourClick(props.tour)}/>
            </div>
    )
}

export default TourCard