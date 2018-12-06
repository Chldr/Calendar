import React, { Component } from 'react';
import Logo from '../assets/images/calendar_icon.png';
import Menu from '../assets/images/menu.png';


class Header extends Component {
    onCalendarClick = (event) => {
        event.preventDefault();
        this.props.changeDate(null);
    }
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="Left">
                        <img className="Logo" src={Logo} alt="logo" />
                        <span className="Name">Calendar</span>

                    </div>
                    <div className="Right">
                        <button onClick={this.onCalendarClick}>
                            <img className="Menu" src={Menu} alt="menu" />
                        </button>

                     </div>

                </div>
                <hr />
            </div>
        );
    }
}

export default Header;
