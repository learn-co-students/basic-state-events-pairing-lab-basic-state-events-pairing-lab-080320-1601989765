import React, { Component } from "react";
import DogCard from "../Components/DogCard.js";

class DogList extends Component {


  render() {
    
    return (
      <>
        <div className="list"> 
          {this.props.dogs.map((dog) => 
              <DogCard 
                key={dog.id} 
                name = {dog.name} 
                img = {dog.img}
                breed = {dog.breed}/>)
          }
        </div>
      </>
    )
  }
}

export default DogList;
