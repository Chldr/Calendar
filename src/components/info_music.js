import React, { Component } from 'react';
import { BIRTHDAY_MAP } from '../constants/birthdays';

class Music extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const month = this.props.date.format("MM");
        const date = this.props.date.format("DD");
        console.log(month, date);

         const todayBirth = BIRTHDAY_MAP.find(item => {
            return item.month == month && item.date == date
        })
        return (
            <div>
                <h3 className="Player_title">MUSIC</h3>
                {
                    todayBirth ? (
                        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="300" height="86" src="//music.163.com/outchain/player?type=2&id=4969823&auto=1&height=66"></iframe>
                    ) : (
                        <iframe
                            frameBorder="no"
                            title="brano"
                            border="0"
                            marginWidth="0"
                            marginHeight="0"
                            src="//music.163.com/outchain/player?type=2&id=27874327&auto=0&height=66"
                        />
                    )
                }
            </div>
        )
    }

}

export default Music;





