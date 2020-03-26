import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import Search from './Search'
import EventCard from './EventCard'
// import Event from './Event'

export default class UserProfile extends React.Component{

    state = {
        allEvents: [],
        copyEvents: []
    }

    searchHandler = events => {
        this.setState({
            allEvents: events["_embedded"]["events"]
        })
    }

    editProfile = () => {
        window.open('/editprofile')
    }

    render(){
        console.log(this.state.allEvents)
        return !this.props.currentUser ? <div>DOM LOADING...</div> : (
            <div className="page">
                <div className="row">
                    <div className="card-userAvatar">
                        <img src={this.props.currentUser.profile_pic ? this.props.currentUser.profile_pic : "https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg"} />
                    </div> 
                    <div className="container-userEvents">
                        <img src="https://i.pinimg.com/originals/91/b5/96/91b596bf1cff50b55fe1e312edba424a.jpg"/>
                        <img src="https://d2z11snniwyi52.cloudfront.net/images/template/2729/23/Comedy-Retro-Microphone-Event-Ticket__front.png"/>
                        <img src='https://d2z11snniwyi52.cloudfront.net/images/template/2770/16/Lions-Club-International-Water-Color-Event-Ticket__front.png'/>
                        <img src="https://3.bp.blogspot.com/-c9UVJi0o2xo/UDZYX3J2qVI/AAAAAAAAA_g/cl7ZNwS5Pn8/s1600/bieber+ticket+front+side.jpg"/>
                    </div>
                    <div className="search">
                        <Search searchHandler={this.searchHandler}/>
                    </div>
                </div>
                <div className="row">
                    <div className="container-otherEvents">
                        {this.state.allEvents.map(event => <Link to={{ pathname: '/eventPage', state: { event: event} }} ><EventCard event={event}/></Link>)}
                    </div>
                    <div className="card-userInfo">
                        <h2>{this.props.currentUser.username}</h2>
                        <p>{this.props.currentUser.name ? this.props.currentUser.name:"Didnt leave a name"}</p>
                        <p>{this.props.currentUser.age ? this.props.currentUser.age:"How old are you?"}</p>
                        <p>{this.props.currentUser.summary ? this.props.currentUser.summary:"You need to update your profile"}</p>
                        <button onClick={this.editProfile}>Edit Profile</button><button onClick={this.createEvent}>Create Event</button><button onClick={this.startTour}>Start Tour</button>
                    </div>
                </div>
            </div>
        )
    }
}