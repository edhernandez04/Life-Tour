import React from 'react'
import User from '../components/User'

class Home extends React.Component{

    state = {
        users: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => this.setState({users}))
    }
    
    render (){
        return (
            <div>
                <h1>LifeTour</h1>
                <p>welcome to your journey!</p>
                {this.state.users.map(user => <User key={user.id} user={user}/>)}
            </div>
        )
    }
}

export default Home;