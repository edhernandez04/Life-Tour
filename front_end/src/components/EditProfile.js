import React from 'react'

class EditProfile extends React.Component{

    state = { 
        name: "",
        age: null,
        summary: "",
        img: ""
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/${this.props.currentUser.id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body: JSON.stringify({
                name: this.state.name,
                age: this.state.age,
                summary: this.state.summary,
                img: this.state.img
            })
        }).then(console.log(this.props.currentUser))
      }

    render(){
        return (
            <div className="formContainer">
                <form className="actualForm" onSubmit={this.handleSubmit}>
                    <h1>Edit Profile</h1>
                    <div className="txtbox">
                        <input onChange={this.handleChange} type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="txtbox">
                        <input onChange={this.handleChange} type="integer" name="age" placeholder="Age" />
                    </div>
                    <div className="txtbox">
                        <input onChange={this.handleChange} type="text" name="summary" placeholder="Summary" />
                    </div>
                    <div className="txtbox">
                        <input onChange={this.handleChange} type="text" name="img" placeholder="Profile img URL" />
                    </div>
                    <button type="submit" value="Login"> Update </button>
                </form>
            <div className="fullscreen-video-wrap">
                <video src="https://www.videvo.net/videvo_files/converted/2014_06/preview/Club_Lights_Red_Blue.mov24678.webm" autoPlay={true} loop={true}></video>
            </div>
            </div>
        )
    }
}

export default EditProfile;