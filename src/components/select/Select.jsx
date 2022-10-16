import React from "react";
import './select.css';

class Favorite extends React.Component { 
    constructor(props) { 
        super(props);

        this.state = {value: 'C'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value})
    }

    handleSubmit(event) { 
        alert('Your favorite programming language is: ' + this.state.value);
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="program">Select your favorite programming language:</label>
                    <select id="program" onChange={this.handleChange}>
                        <option value="C++">C++</option>
                        <option value="Python">Python</option>
                        <option value="Go">Go</option>
                        <option value="PHP">PHP</option>
                        <option value="C">C</option>
                        <option value="Java">Java</option>
                    </select>
            </form>
        )
    }
}

export default Favorite

// overall, input type text, textarea and select work the same way - they accept a value attribute that you can use to implement a controlled element 