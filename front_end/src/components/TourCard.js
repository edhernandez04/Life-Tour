import React, { Component } from 'react';

const TourCard = props => {

    return (
            <div className="tour-card">
                <img src={props.tour.tour_pic} alt={props.tour.title}/>
            </div>
    )
}

export default TourCard