import React from 'react'
// import Event from './Event'

export default class UserProfile extends React.Component{

    render(){
        console.log(this.props.user)
        return (
            <div className="page">
                <div className="col 4">
                <div className="card-userAvatar">
                    <img src="https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg" />
                </div>
                <div className="card-userInfo">
                    <h3>{this.props.user.username}</h3>
                    <p>Name: {this.props.user.name ? this.props.user.name:"Didnt leave a name"}</p>
                    <p>Age: {this.props.user.age ? this.props.user.age:"How old are you?"}</p>
                    <p>Bio: {this.props.user.summary ? this.props.user.summary:"You need to update your profile"}</p>
                </div>
                </div>
                <div className="col 8">
                <div className="container-userEvents">
                    {/* <Event /> would be individual event cards*/}
                    <img src="https://i.pinimg.com/originals/91/b5/96/91b596bf1cff50b55fe1e312edba424a.jpg"/>
                    <img src="https://d2z11snniwyi52.cloudfront.net/images/template/2729/23/Comedy-Retro-Microphone-Event-Ticket__front.png"/>
                    <img src='https://d2z11snniwyi52.cloudfront.net/images/template/2770/16/Lions-Club-International-Water-Color-Event-Ticket__front.png'/>
                    <img src="https://3.bp.blogspot.com/-c9UVJi0o2xo/UDZYX3J2qVI/AAAAAAAAA_g/cl7ZNwS5Pn8/s1600/bieber+ticket+front+side.jpg"/>
                </div>
                <div className="container-otherEvents">
                </div>
                </div>
            </div>
        )
    }
}