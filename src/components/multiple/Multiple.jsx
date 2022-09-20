// handling multiple inputs using the name attribute 

import React from 'react';
import './multiple.css';

class Multiple extends React.Component {
    constructor(props) { 
        super(props);

        this.state = { 
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) { 
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name] : value})
    }

    render() { 
        return (
            <form>
                <label>
                    Is Going
                    <input 
                        type="checkbox" 
                        name='isGoing'
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label> 
                    Number of Guests:
                    <input 
                        type="number"
                        name='numberOfGuests'
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} 
                    />
                </label>
            </form>
        )
    }
}

export default Multiple

// ? what is the syntax with the name being in the box brackets as an array value - es6 computed property name