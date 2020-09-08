import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';


class HistoryToday extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: '',
            title: '',
            content: '',
        }

        this.getInfo(props.date)
    }

    async getInfo(date) {
        const month = date.format("MM");
        const dateTime = date.format("DD");

        const result = await axios.get(`https://baike.baidu.com/cms/home/eventsOnHistory/${month}.json`);
        const collection = result.data[month][`${month}${dateTime}`];
        this.setState({
            year: collection[collection.length - 1]['year'],
            title: collection[collection.length - 1]['title'],
            content: collection[collection.length - 1]['desc'] + "..."
        });

    }


    render() {
        const month = this.props.date.format("MM");
        const dateTime = this.props.date.format("DD");

        return  (
            <div className="Info__text One">
                <h3 className="Info__text_title">历史上的今天</h3>
                <div className="content">
                    <>
                        <p>年代：{this.state.year}</p>
                        <p dangerouslySetInnerHTML={{__html:this.state.title}}></p>
                        <p dangerouslySetInnerHTML={{__html:this.state.content}}></p>
                    </>
                </div>
            </div>
        );
    }

}

export default HistoryToday;
