import React from 'react'

class Search extends React.Component {

    state = {
        keyword: "",
        city: ""
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/search_events", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(events => {
            this.props.searchHandler(events)
        })
    }
    
    render() {
        return (
            <div className="searchForm" onSubmit={this.submitHandler}>
                <form className="eventSearch">
                    <input type="text" name="keyword" placeholder="Find an event ..." value={this.state.keyword} onChange={this.changeHandler}/>
                    <input type="text" name="city" placeholder="What city?" value={this.state.city} onChange={this.changeHandler}/>
                    <button type="submit"> Search </button>
                </form>
            </div>
        )
    }
}

export default Search