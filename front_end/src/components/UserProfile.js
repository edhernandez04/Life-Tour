import React from 'react'

export default class User extends React.Component{
    
    render(){
        return (
            <div className="card">
                <h4>{this.props.user.name} / {this.props.user.age} </h4>
                <p>{this.props.user.summary}</p>
            </div>
        )
    }
}