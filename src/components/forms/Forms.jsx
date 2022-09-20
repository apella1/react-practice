import './forms.css';
import React from 'react';

class NameForm extends React.Component { 
    constructor(props) {
        super(props);

        this.state = '';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({value: event.target.value})
    }

    handleSubmit(event) { 
        alert('A name was inserted:' + this.state.value);
        event.preventDefault();
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' value={this.state.value} onChange={this.handleChange} />
                <input type="submit"  value='Submit' />
            </form>
        );
    }
}

export default NameForm