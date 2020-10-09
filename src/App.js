import React, { Component } from "react";
import "./App.css";

import DogsList from "./Containers/DogsList.js"
import CreateForm from "./Components/CreateForm.js";
import apiResponse from './api.js'
import SearchBar from "./Components/SearchBar";

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
      inputValue:'',
      dogs: apiResponse
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
    event.preventDefault()
    let newApiState = this.state.api
    newApiState.push({...this.state.form})

    this.setState({
      api: [...newApiState]  
    })
  }

  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  filteredDogs = () => {
    return this.state.api.filter(dog => {
      return dog.name.toLocaleLowerCase().includes(this.state.inputValue.toLocaleLowerCase())
    })
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
          <SearchBar
            dogs ={this.filteredDogs()}
            handleSearchChange={this.handleSearchChange}
            inputValue = {this.state.inputValue}
          />
          <br></br>
          <div className="app">
            <DogsList 
              dogs = {this.state.dogs}
              api={this.state.api}
              inputValue={this.state.inputValue}
            />
          </div>
        </div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.dogs === this.state.dogs){
      this.setState({
        dogs: this.filteredDogs()
      })
    }
  }
  
}

export default App;
