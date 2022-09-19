import './toggle.css';
import React from 'react';

class Toggle extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this); // this binding  is necessary to make 'this' work in the callback 
    }

    handleClick() { 
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() { 
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle

// in javascript, class methods are not bound by default 