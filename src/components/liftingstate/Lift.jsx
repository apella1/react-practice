import './lift.css';
import React from 'react';

function BoilingVerdict(props) { 
    const wouldBoil = props.celsius >= 100;
    return (
        <p className='boiling-verdict'>
            {wouldBoil ? 'The water would boil' : 'The water would not boil'}
        </p>
    )
}

const scaleNames = {
    c: 'celsius', 
    f: 'fahrenheit'
}

// conversion functions - the function converts numbers

function toCelsius(fahrenheit) { 
    return (fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius) { 
    return (celsius * 9/5) + 32;
}

function tryConvert(temperature, convert) { 
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component { 
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }

    render() { 
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input 
                    value={temperature}
                    onChange={this.handleChange} 
                />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) { 
        super(props)

        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) { 
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) { 
        this.setState({scale: 'f', temperature});
    }

    render() { 
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput 
                    scale='c' 
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />

                <TemperatureInput 
                    scale='f' 
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                /> 

                <BoilingVerdict 
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
}

export default Calculator

// sharing state is managed by moving it up to the closest common ancestor of the component that needs it. This is known as lifting state 
// There should be a single source of truth for any data that changes in a react application
// ? top-down data flow
// ? lifting state up a component tree vs sending state down a component tree 
