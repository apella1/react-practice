import React from 'react';
import './render.css';

function WarningBanner(props) { 
    if(!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Warning
        </div>
    )
}

class Page extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState( state => ({
            showWarning: !state.showWarning
        }));
    }

    render() { 
        return (
            <>
            <WarningBanner warn={this.state.showWarning} />
            <button>
                {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
            </>
        )
    }
}

export default Page

// returning null from the render method of a component does not affect the firing of the component's lifecycle methods. 
// e.g componentDidUpdate will still be called 