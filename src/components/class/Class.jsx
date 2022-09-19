import './class.css';
import React from 'react';

class Greeting extends React.Component { 
    render() {
        return (
            <h1>
                Hello, {this.props.name}
            </h1>
        )
    }
}

export default Greeting

// using es6 classes to define components