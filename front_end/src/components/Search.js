import React from 'react'

class Search extends React.Component {

    state = {
        keyword: "",
        city: ""
    }

    submitHandler = (event) => {
        event.preventDefault()
        fetch("localhost:3000/search_events", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }
    
    render() {
        return (
            <div className="searchForm" onSubmit={this.submitHandler}>
                <form className="eventSearch">
                <input type="text" name="keyword" placeholder="Find an event ..."/>
                <input type="text" name="city" placeholder="What city?"/>
                <button type="submit"> Search </button>
                </form>
            </div>
        )
    }
}

export default Search