import React, { Component } from "react";
import "./App.css";

import DogsList from "./Containers/DogsList.js"
import CreateForm from "./Components/CreateForm.js";
import apiResponse from './api.js'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      form:
        {
          name:'',
          img:'',
          breed:''
        },
      api: apiResponse,
    }
  }
  
  handleFormChange = (event) => {
    let newFormData = {[event.target.name]: event.target.value}
    this.setState({
      form: {
        ...this.state.form, ...newFormData
      }
    })
  }

  handleFormSubmit = (event) => {
    let newApiState = this.state.api
    newApiState.push({...this.state.form})

    this.setState({
      api: [...newApiState]
      // api: [...this.state.api, ...this.state.form]
    })
    console.log(this.state.api)
    event.preventDefault()
  }
  
  render() {
    return (
      <>
        <div>
          <CreateForm
            name={this.state.form.name}
            img={this.state.img}
            breed={this.state.form.breed}
            handleFormChange={this.handleFormChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <br></br>
          <div className="app">
            <DogsList 
              api={this.state.api}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
