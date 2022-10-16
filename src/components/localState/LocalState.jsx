import './localstate.css';
import React from 'react';

class Time extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {date: new Date()}
    }
// adding a class constructor that assigns the initial this.state
// class components should always call the base constructor with props 

    componentDidMount() { 
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() { 
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() { 
        return (
            <>
                <h1>Time and Date</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}

export default Time

// * adding local state to a class
// ? Mounting and unmounting in react -  react lifecycle methods 
// ? lifecycle methods - componentDidMount and componentWillUnmount - alternative is using useEffect hook while using functional components
// stateful vs stateless components

// this.setState is similar to the useState hook. However, the hook does not merge the old and the new states together 