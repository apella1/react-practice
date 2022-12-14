import './textarea.css';
import React from 'react';

class EssayForm extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            value: 'Write an essay of your favorite founder.',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value})
    }

    handleSubmit(event) { 
        alert('An essay was submitted: ' + this.state.value)
        event.preventDefault();
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="essay">Essay:</label>
                <textarea id="essay" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value='Submit' />
            </form>
        )
    }
}

export default EssayForm
