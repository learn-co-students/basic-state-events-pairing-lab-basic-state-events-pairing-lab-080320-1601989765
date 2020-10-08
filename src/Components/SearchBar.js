import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    render() {
        return (
            <div>
                <label htmlFor='search'> Search Dog by name </label>
                <input 
                    type="text"
                    name="inputValue" 
                    value={this.props.inputValue} 
                    onChange={this.props.handleSearchChange}
                />
          </div>
        )
    }
}
