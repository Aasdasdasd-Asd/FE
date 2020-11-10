import React from 'react'
import './search.css'

export default class Search extends React.Component{
    state ={
        value: ''
    }
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(){
        this.props.titleSearch(this.state.value)
    }
    render(){
        return(
            <div>
                <input placeholder='Search by title' type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }
}