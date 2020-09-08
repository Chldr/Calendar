import React, { Component } from 'react';
import HistoryToday from './info_history_today';
import Music from './info_music';

class Info extends Component {
    render() {
        return(
            <div className="Info">
                <HistoryToday date={this.props.date} />
                <Music date={this.props.date} />    
            </div>
        );
    }
}

export default Info;