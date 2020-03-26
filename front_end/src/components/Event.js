import React from 'react'

class Event extends React.Component {
    render(){
        return(
            <div>
                <div className="event-card-image">
                    <img src={this.props.event.images[2]}/>
                </div>
                <div className="event-card-details">
                    <h4>{this.props.event.name}</h4>
                    <p>{this.props.event.dates}</p>
                    <p>{this.props.event.priceRanges}</p>
                    <p><a href={this.props.event.seatmap}>Check Seat Map</a></p>
                </div>
            </div>
        )
    } 
}

export default Event