import React, { Component } from 'react';
import CurrentDate from './current_date';
import Theme from './theme';
import Info from './info';


class Daily extends Component {
   render() {
        return(
            <div>
                <CurrentDate date={this.props.date} />
                <Theme date={this.props.date} />
                <Info date={this.props.date} />
            </div>
        )
   }
}

export default Daily;