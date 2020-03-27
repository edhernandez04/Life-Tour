import React from 'react'

class CreateTour extends React.Component{

    state = { 
        title: "",
        summary: "",
        tour_pic: "",
        user_id: null
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/tours`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            body: JSON.stringify({
                title: this.state.title,
                summary: this.state.summary,
                tour_pic: this.state.tour_pic,
                user_id: this.props.currentUser.id
            })
        })
        .then(resp => resp.json())
            .then(tour => {
                console.log(tour)
                this.props.history.push(`/profile`)
            })
      }

    render(){
        return (
            <div className="formContainer">
                <form className="actualForm" onSubmit={this.handleSubmit}>
                    <h1>Start Tour</h1>
                    <div className="txtbox">
                        <input onChange={this.handleChange} type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="txtbox">
                        <input onChange={this.handleChange} type="text" name="tour_pic" placeholder="Tour Picture" />
                    </div>
                    <div className="txtbox">
                        <input onChange={this.handleChange} type="text" name="summary" placeholder="Summary" />
                    </div>
                    <button type="submit" value="Login"> Start Tour </button>
                </form>
            <div className="fullscreen-video-wrap">
                <video src="https://cdn.videvo.net/videvo_files/video/free/2020-03/small_watermarked/200207_London%20Streets_1_4k_082_preview.webm" autoPlay={true} loop={true}></video>
            </div>
            </div>
        )
    }
}

export default CreateTour;