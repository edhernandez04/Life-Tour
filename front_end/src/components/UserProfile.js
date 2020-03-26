import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import Search from './Search'
import EventCard from './EventCard'
import TourCard from './TourCard'

export default class UserProfile extends React.Component{

    state = {
        allEvents: [],
        copyEvents: [],
        allTours: [],
    }

    searchHandler = events => {
        this.setState({
            allEvents: events["_embedded"]["events"]
        })
    }

    componentDidMount() {
        fetch("http://localhost:3000/tours")
        .then(resp => resp.json())
        .then(allTours => { this.setState({allTours}) })
    }

    render(){
        console.log(this.state.allTours)
        return !this.props.currentUser ? <div>LOADING... (You Shouldnt See this)</div> : (
            <div className="page">
                <div className="row">
                    <div className="card-userAvatar">
                        <img src={this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : "https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg"} />
                    </div> 
                    <div className="container-userEvents">
                        {this.state.allTours.filter(tour => tour.user_id === this.props.currentUser.id).map(tour => <TourCard key={tour.id} tour={tour}/>)}
                    </div>
                    <div className="search">
                        <Search searchHandler={this.searchHandler}/>
                    </div>
                </div>
                <div className="row">
                    <div className="wrapper-2">
                        {this.state.allEvents === [] ? "need somthing" : this.state.allEvents.map(event => <Link to={{ pathname: '/event', state: { event: event} }} ><EventCard event={event}/></Link>)}
                    </div>
                    <div className="card-userInfo">
                        <h2 align="center">{this.props.currentUser.username}</h2>
                        <p>{this.props.currentUser.name ? this.props.currentUser.name:"Didnt leave a name"}</p>
                        <p>{this.props.currentUser.age ? this.props.currentUser.age:"How old are you?"}</p>
                        <p>{this.props.currentUser.summary ? this.props.currentUser.summary:"You need to update your profile"}</p>
                        <button onClick={() => this.props.history.push('/editProfile')}>Edit Profile</button>
                        <button onClick={() => this.props.history.push('/starttour')}>Start Tour</button>
                    </div>
                </div>
            </div>
        )
    }
}