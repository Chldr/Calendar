import React, { Component } from 'react';
import moment from 'moment';

class Lunar extends Component {
    constructor(props) {
        super(props);

        const matrix = this.initMatrix(moment());

        this.state = {
            matrix
        }

    }

    initMatrix(date){
        let week = {
            Mon: null,
            Tue: null,
            Wed: null,
            Thu: null,
            Fri: null,
            Sat: null,
            Sun: null
        }
        const matrix = []


        const weekClone = Object.assign({}, week);
        const daysInMonth = date.daysInMonth();
        for (let i = 1;i <= daysInMonth;i++) {
            date.date(i);
            week[date.format('ddd')] = date.clone();

            if (date.format('ddd') === 'Sun') {
                matrix.push(Object.assign({}, week));
                week = Object.assign({}, weekClone);
            }
        }

        return matrix;
    }

    renderMatrix() {
        const getDate = (date) => {
            return date ? date.get('date') : null;
        }

        return this.state.matrix.map((week, index) => {
            const weekDay = Object.keys(week).map((day, key) => {
                const classList = [week[day] ? "Day" : "Empty-day"];
                if (week[day]) {
                  moment().isSame(week[day].format('YYYY-MM-DD'), 'day') && classList.push("Current-date");
                }
                return (
                    <span
                        key={key}
                        onClick={() => this.props.changeDate(week[day])}
                        className={classList.join(" ")}>
                        {getDate(week[day])}
                    </span>
                )
            });
            return(
                <div key={index} className="Days-in-weeks Margin-change">
                    {weekDay}
                </div>
            );
        });
    }

    render() {
        const year = moment().format('YYYY');
        const month = moment().format('MMMM');
        return (
            <div className="Monthly-calendar">
                <h4 className="Year">{ year }</h4>
                <h3 className="Month">{ month }</h3>
                <div className="Weeks Margin-change">
                    <span className="Mon">
                        MON
                    </span>
                    <span className="Tue">
                        TUE
                    </span>
                    <span className="Wed">
                        WED
                    </span>
                    <span className="Thu">
                        THU
                    </span>
                    <span className="Fri">
                        FRI
                    </span>
                    <span className="Sat">
                        SAT
                    </span>
                    <span className="Sun">
                        SUN
                    </span>
                </div>
                <div className="Weeks-in-month">
                    {this.renderMatrix()}
                </div>
            </div>
        );
    }
}

export default Lunar;
