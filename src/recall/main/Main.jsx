import './main.css';
import React from 'react';

class Main extends React.Component { 
    constructor(props) { 
        super(props);

        this.state = {isACtive: false}
        this.handleStatusOn = this.handleStatusOn.bind(this);
        this.handleStatusOff = this.handleStatusOff.bind(this);
    }

    handleStatusOn() { 
        this.setState({isActive: true})
    }

    handleStatusOff() { 
        this.setState({isActive: false})
    }

    render() { 
        return (
            <div className="status-update">
                <button onClick={this.isActive ? this.handleStatusOff : this.handleStatusOn}>
                    {this.isActive ? 'Disable Status' : 'Activate Status'}
                </button>
            </div>
        )
    }
}

export default Main