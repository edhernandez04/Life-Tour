import React from 'react'

class Tour extends React.Component{
    render(){
        return(
            <div>
                <div className="tour-avatar">
                    <h2>Pardi Hardi Tour</h2>
                    <img src='https://www.visitbritain.com/sites/default/files/styles/vbmc_content_page/public/vbmc_consumer/main_images/vb34168897.jpg?itok=BIR_JBsL'/>
                </div>
                <div className="tour-details">
                    <p>Brooklyn</p>
                    <p>Manhattan</p>
                    <p>Queens</p>
                    <p>Manhattan</p>
                    <p>The Bronx</p>
                    <p>The Bronx</p>
                </div>
                <div className="tour-container">
                    <div className="tour-event-card">
                        <img src="https://thenypost.files.wordpress.com/2019/06/outdoor-rooftop-crown-bowery-1a.jpg?quality=80&strip=all&w=978&h=652"/>
                        <p>Manhattan Rooftop Pardi</p>
                        <p>6:00pm - 9:00pm</p>
                        <p>24 attendees</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tour