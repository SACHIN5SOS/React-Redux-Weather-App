import React , { Component } from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
    
        this.state = ({term: ''})
    }

    onInputChange=(event)=> {
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    onSubmitForm=(event) => {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onSubmitForm} className="input-group">
                <input placeholder="Get forecast for 5 days of your favourite city" 
                className="form-control"
                value = {this.state.term} onChange = {this.onInputChange.bind(this)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}