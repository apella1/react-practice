import './state.css';
import React from 'react';

class Clock extends React.Component { 
    render() {
        return (
            <>
             <h1>Time</h1>
             <h2>It is {this.props.date.toLocaleTimeString()}</h2>
            </> 
         )
    }
}

// the render method will be called each time an update happens

export default Clock;

// state is similar to props, but is private and fully controlled by the component 
// a function within a function is a method of that function?
// * using the 'this' keyword with es6 classes 