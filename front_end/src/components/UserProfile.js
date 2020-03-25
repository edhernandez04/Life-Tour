import React from 'react'
import { Redirect } from 'react-router-dom'
// import Event from './Event'

export default class UserProfile extends React.Component{

    state = {
        allEvents: [],
        copyEvents: []
    }

    searchChange = (e) => {
        this.setState({ search: e.target.value },
          () => { this.setState({
            allEvents: this.state.copyEvents.filter(event => event.title.includes(this.state.search))
          }) }
        )
      }

    editProfile = () => {
        window.open('/editprofile')
    }

    startTour = () => {
        window.open('/starttour')
    }

    render(){
        return !this.props.currentUser ? <Redirect to="/login" /> : (
            <div className="page">
                <div className="row">
                    <div className="card-userAvatar">
                        <img src="https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg" />
                    </div> 
                    <div className="container-userEvents">
                        {/* <Event /> would be individual event cards*/}
                        <img src="https://i.pinimg.com/originals/91/b5/96/91b596bf1cff50b55fe1e312edba424a.jpg"/>
                        <img src="https://d2z11snniwyi52.cloudfront.net/images/template/2729/23/Comedy-Retro-Microphone-Event-Ticket__front.png"/>
                        <img src='https://d2z11snniwyi52.cloudfront.net/images/template/2770/16/Lions-Club-International-Water-Color-Event-Ticket__front.png'/>
                        <img src="https://3.bp.blogspot.com/-c9UVJi0o2xo/UDZYX3J2qVI/AAAAAAAAA_g/cl7ZNwS5Pn8/s1600/bieber+ticket+front+side.jpg"/>
                    </div>
                    <div className="search">
                        <input type="text" placeholder={"Search Events"} onChange={this.searchChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="container-otherEvents">
                        <img src="https://fcclainc.org/sites/default/files/star-events.jpg" />
                        <img src="https://www.visitbritain.com/sites/default/files/styles/vbmc_content_page/public/vbmc_consumer/main_images/vb34168897.jpg?itok=BIR_JBsL" />
                        <img src="https://specials-images.forbesimg.com/imageserve/1146473379/960x0.jpg?fit=scale" />
                        <img src="https://orbis.imgix.net/https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fgb.files.orbis.epevaluation.co.uk%2Fimages%2FFundraising%2FOrbis-0014-P5-0428.JPG%3Fmtime%3D20181105155413?auto=compress&crop=focalpoint&fit=crop&fp-x=0&fp-y=0.5&h=660&ixlib=php-1.1.0&q=75&w=768&s=10d7fb4579ac0bb76125263be5d5a016" />
                        <img src="https://i.insider.com/5e5d4b1efee23d47fc1f7be5?width=1100&format=jpeg&auto=webp" />
                        <img src="https://static.mommypoppins.com/styles/image620x420/s3/lead_vessel_exterior_jmm.jpg" />
                        <img src="https://cdn.thecrazytourist.com/wp-content/uploads/2019/04/ccimage-shutterstock_615200000.jpg" />
                        <img src="https://static.mommypoppins.com/styles/image620x420/s3/luna_park_05_alex_lopez_0.jpg" />
                        <img src="https://assets3.thrillist.com/v1/image/2679747/size/tmg-article_default_mobile.jpg" />
                        <img src="https://media.cntraveler.com/photos/5851cb6b053d277e273da5ab/master/w_2048,h_1536,c_limit/best-bars-NYC-Maison-Premiere-2016.jpg" />
                        <img src="https://thenypost.files.wordpress.com/2019/06/outdoor-rooftop-crown-bowery-1a.jpg?quality=80&strip=all&w=978&h=652" />
                        <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F07%2Fbest-bubble-tea-nyc-01.jpg?q=75&w=800&cbr=1&fit=max" />
                    </div>
                    <div className="card-userInfo">
                        <h2>{this.props.currentUser.username}</h2>
                        <p>{this.props.currentUser.name ? this.props.currentUser.name:"Didnt leave a name"}</p>
                        <p>{this.props.currentUser.age ? this.props.currentUser.age:"How old are you?"}</p>
                        <p>{this.props.currentUser.summary ? this.props.currentUser.summary:"You need to update your profile"}</p>
                        <p>Featured Friend</p>
                        <p>dates for next tours</p>
                        <p>most commented tours</p>
                        <button onClick={this.editProfile}>Edit Profile</button><button onClick={this.startTour}>Start Tour</button>
                    </div>
                </div>
            </div>
        )
    }
}