import React, { Component } from 'react'

export default class CreateForm extends Component {

    render() {
        return (
            <div>
                <h1>Add Dog Here:</h1>
                <form onChange={this.props.handleFormChange} >
                    <label> Name:
                        <input
                            type="text" 
                            name="name"
                            placeholder="fido"
                            value={this.props.name} 
                        /><br/>
                    </label>
                    <label> Image URL:
                        <input
                            type="text" 
                            name="img" 
                            placeholder="fido.jpeg"
                            value={this.props.img} 
                        /><br/>
                    </label>
                    <label> Breed:
                        <input
                            type="text" 
                            name="breed"
                            placeholder="Pitbull"
                            value={this.props.breed} 
                        /><br/>
                    </label>
                    <input onClick={this.props.handleFormSubmit}
                        
                        type="submit" 
                        value="Submit"
                        name="submit" 
                    />
                    
                </form>
            </div>
        )
    }
}
