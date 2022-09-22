import React from 'react';
import './accessibility.css';

function CustomTextInput(props) { 
    return ( 
        <div>
            <input ref={props.inputRef} />
        </div>
    )
}

class Parent extends React.Component { 
    constructor(props) { 
        super(props); 

        this.inputElement = React.createRef();
    }

    render() { 
        return ( 
            <CustomTextInput inputRef={this.inputElement} />
        )
    }
}

export default Parent 