import React, { Component } from 'react';


class CurrentDate extends Component {

    render() {
        const { date } = this.props;
        return (

            <div className="Date">
                <div className="Date__year-month">
                    {date.format('YYYY')}.{date.format('MM')}
                </div>
                <div className="Date__date">
                    {date.format('DD')}
                </div>
                <div className="Date__day">
                    <div className="Date__day__text">
                        {date.format('dddd')}
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentDate;
