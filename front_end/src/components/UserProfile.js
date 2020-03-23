import React from 'react'

export default class User extends React.Component{
    
    render(){
        return (
            <div className="card personal">
                <h4>{this.props.user.name} </h4>
                <p>{this.props.user.age ? this.props.user.age: "Update your age"}</p>
                <p>{this.props.user.summary ? this.props.user.summary: "Update your bio"}</p>
            </div>
        )
    }
}