import React from 'react'
import Event from './EventCard'

class Tour extends React.Component{

    render(){
        return(
            <div>
                <div className="tour-avatar">
                    <h2>{this.props.tour.title}</h2>
                    <img src={this.props.tour.tour_pic}/>
                </div>
                <div className="tour-details">
                    <h3>HOST: {this.props.tour.user_id}</h3>
                    <p>{this.props.tour.summary}</p>
                </div>
                <div className="wrapper">
                    {/* {this.props.allEvents.filter(event => event.tour_id === this.props.tour.id).map(event => <Event key={event.id} event={event}/>)} */}
                </div>
            </div>
        )
    }
}

export default Tour