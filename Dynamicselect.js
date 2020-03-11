import React, { Component } from 'react'
import {Dropdown} from 'primereact/dropdown';
import axios from 'axios';

export default class Dynamicselect extends Component {
    constructor(){
        super();
        this.state={
            months:[],
            month:null
     
            
        }

  
    }
    handleChange =(e)=>{
        this.setState({month: e.value});
    }
  
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const months = res.data;
        this.setState({ months });
      })
    }
    render() {
        return (
           
          <div>
                    <Dropdown value={this.state.month} options={this.state.months}  onChange={this.handleChange} placeholder="Select a City" optionLabel="id" style={{width: '12em'}}/>
                    
                    </div>
        )
        
    }
}
