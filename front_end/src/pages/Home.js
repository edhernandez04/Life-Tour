import React from 'react'

class Home extends React.Component{

    render (){
        return (
            <div className="homePage">
                <div className="fullscreen-video-wrap">
                    <video src="https://www.videvo.net/videvo_files/converted/2013_12/preview/STADIUM_WIDE_SOFT.mov36474.webm" autoPlay={true} loop={true}></video>
                </div>
            </div>
        )
    }
}
export default Home;