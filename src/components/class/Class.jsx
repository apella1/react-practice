import './class.css';
import React from 'react';

class Greeting extends React.Component { 
    constructor (props) {
        super(props);
        
        this.state = {lightsOn: false};
        this.handleLightsOn = this.handleLightsOn.bind(this);
        this.handleLightsOff = this.handleLightsOff.bind(this);
    }

    // I have used an arrow function within the setState method. In the other examples the state is called directly without using a function 
    handleLightsOn() {
        this.setState( () => (
            {lightsOn: true}
        ))
    }

    handleLightsOff() { 
        this.setState({lightsOn: false})
    }

    render() {
        const lightsOn = this.state.lightsOn;
        return (
            <div>
                <h1>
                    Hello, {this.props.name}
                </h1>

                <button onClick={lightsOn ? this.handleLightsOff : this.handleLightsOn}>
                    {lightsOn ? 'OFF' : 'ON'}
                </button>
            </div>
        )
    }
}

export default Greeting

// using es6 classes to define components
// classes use 'this' keyword 
// however when adding local state to the classes, 'this' has to be bound within the methods of the class 
// the binding of 'this' is not done automatically even within js