import React from 'react'

class TourPage extends React.Component{

    state = {
        tourEvents: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/tours/${this.props.tour.id}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .then(events => {
            this.setState({
                tourEvents: events
            })
        })
    }

    render(){
        return(
            <div>
                <div className="tour-avatar">
                    <h2>{this.props.tour.title}</h2>
                    <img src={this.props.tour.tour_pic}/>
                </div>
                <div className="tour-details">
                    <p>Grand Marshall</p>
                    <p>Start Date - End Date</p>
                    <p>{this.state.tourEvents.count}</p>
                    <p>Tour stops</p>
                    <p>The Bronx</p>
                </div>
                <div className="wrapper">

                    {this.state.tourEvents.map(event => {
                    return <div className="tour-event-card">
                                <img src="https://thenypost.files.wordpress.com/2019/06/outdoor-rooftop-crown-bowery-1a.jpg?quality=80&strip=all&w=978&h=652"/>
                                <p>{event.name}</p>
                                <p>{event.date}</p>
                                <p>{event.location}</p>

                            </div>
                    })}

                </div>
            </div>
        )
    }
}

export default TourPage