import React, { Component } from 'react';
import Logo from '../assets/images/calendar_icon.png';


class Header extends Component {
    onCalendarClick = (event) => {
        event.preventDefault();
        this.props.changeDate(null);
    }
    render() {
        return (
            <div>
                <div className="Header">
                    <img className="Logo" src={Logo} alt="logo" />
                      
                    <button onClick={this.onCalendarClick}>  
                        <span className="Name">Calendar</span>
                    </button>
                </div>
                <hr />
            </div>
        );
    }
}

export default Header;
