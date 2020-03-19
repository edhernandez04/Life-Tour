import React from 'react'

export default class User extends React.Component{
    
    state = {
        users: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => this.setState({users}))
    }
    
    render(){
        return (
            <div className="card">
                {this.state.users.map(user => <p>{user.name}</p>)}
            </div>
        )
    }
}