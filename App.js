import React, { Component } from 'react'

// import ReactTable from "react-table";
import ReactTable from 'react-table-6';

import 'react-table-6/react-table.css';


export default class App extends Component {
  constructor(props){
super(props);
this.state = {
  posts:[]
}
  }

componentDidMount(){
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url, {
    method:"GET"
  }).then (response => response.json()).then(posts => {
    console.log("posts",posts)
    this.setState ({posts: posts})
  })

  }


render(){

  const columns = [
    {
      Header: "User Id",
      accessor: "userId"
  
    },
    {
      Header: "ID",
      accessor: "id"
  
    },
{      Header: "Title",
      accessor: "title",
      sortable: false,
      filterable: false
  
    },
    {
      Header: "Content",
      accessor: "body",
      sortable: false,
      filterable: false
  
    }
  ]

  return(
  <ReactTable columns = {columns}

    data={this.state.posts}
    
  filterable>

  </ReactTable>
  );
}


}


