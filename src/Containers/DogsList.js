import React, { Component } from "react";
import apiResponse from '../api.js'
import DogCard from "../Components/DogCard.js";

class DogList extends Component {


  render() {
    return <div className="list">{
        apiResponse.map((dog, index) => <DogCard name = {dog.name} 
          img = {dog.img}
          breed = {dog.breed}
          />)
      }
    </div>;
  }
}

export default DogList;
