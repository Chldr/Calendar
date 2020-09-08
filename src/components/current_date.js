import React, { Component } from 'react';
import { BIRTHDAY_MAP } from '../constants/birthdays';

class CurrentDate extends Component {

    render() {
        const { date } = this.props;
        const year = date.format('YYYY')
        const month = date.format('MM')
        const datedate = date.format('DD')
        const day = date.format('dddd')

        const todayBirth = BIRTHDAY_MAP.find(item => {
            return item.month == month && item.date == datedate
        })
        
        return (

            <div className="Date">
                <div className="Date__year-month">
                    {year}.{month}
                </div>
                <div className="Date__date">
                    {datedate}
                </div>
                <div className="Date__day">
                    <div className="Date__day__text">
                        {day}
                    </div>
                </div>
                {
                    todayBirth &&
                    <div className="birthday-complement">
                        🎂&nbsp;
                        {todayBirth.name}
                        <img style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '50%', margin:'0 4px', }} src={todayBirth.avatar} />
                        生日快乐
                        &nbsp;🎂
                    </div>
                }
            </div>
        );
    }
}

export default CurrentDate;
