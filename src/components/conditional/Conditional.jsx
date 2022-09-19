import './conditional.css';
import React from 'react';
import Greeting from '../class/Class';
import { LogoutButton, LoginButton } from './components';

class LoginControl extends React.Component { 
    constructor(props) { 
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this); 
        this.handleLogoutClick = this.handleLogoutClick.bind(this); 
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() { 
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() { 
        this.setState({isLoggedIn: false});
    }

    render() { 
        const isLoggedIn = this.state.isLoggedIn;

        let button;

        if(isLoggedIn) { 
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else { 
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

export default LoginControl 

// conditional rendering in react works the same way as conditions work in javascript 
// using the inline if and the &&(logical and) operator as a shorter way of the display
// true && evaluates to true and false && evaluates to false 
// the inline conditional elements are also used to show the conditions {trueCondition ? someCondition : otherCondition}