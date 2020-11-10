import React from 'react'
import './search.css'
import {TextField,
    Box,
    Button,
    InputAdornment,
    SvgIcon
  } from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

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
            <div className='row' style={{margin: '40px'}}>
                <Box maxWidth={700} className='col'>
                    <TextField
                    value={this.state.value} onChange={this.handleChange}
                        fullWidth
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SvgIcon
                                fontSize="small"
                                color="action"
                            >
                                <SearchIcon />
                            </SvgIcon>
                            </InputAdornment>
                        )
                        }}
                        placeholder="Search title"
                        variant="outlined"
                    />
                </Box>
                <Button style={{marginLeft: '60px'}} className='col' onClick={this.handleSubmit} variant="contained" color="primary">Search</Button>
            </div>
        )
    }
}