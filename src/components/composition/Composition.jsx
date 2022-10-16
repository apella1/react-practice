import './composition.css';
import React from 'react';

// * PART OF ACCESSIBILITY - later integrate composition to the code base? 

class CustomTextInput extends React.Component { 
    constructor(props) { 
        super(props);

        this.textInput = React.createRef();
    }

    // explicitly focus the text input using the raw DOM API
    // we're accessing current to get the DOM node 

    focus() { 
        this.textInput.current.focus();
    }

    render() { 
        // using the ref callback to store a reference to the text input dom 
        // element in an instance field e.g this.textInput

        return (
            <input
                type="text"
                ref={this.textInput}
            />
        )
    }
}

export default CustomTextInput

// fragments should also have a key prop when mapping collections
// the use of the fragment component to enclose similar elements rather than using a div to allow for accessibility 
// the empty jsx tags can also be used if the environment supports the syntax - probably to do with the react version one is working with. 