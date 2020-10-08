import React, { Component } from 'react'

export default class DogCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bark: "none"
    }
  }

  handleBark = (event) => {
    (this.state.bark === 'none') ? this.setState({bark : "block"})  : this.setState({bark: "none"})
  }
  
  

  render() {
    return (
      <div className="card">
      <span className="content">
        <h2 >{this.props.name}</h2>
        <img alt={this.props.breed} src={this.props.img} />
      </span>
      <span className="bark">
        <button onClick={this.handleBark}>Bark</button>
        <h2 style={{display: this.state.bark}}>Bark!</h2>
      </span>
    </div>
    )
  }
}