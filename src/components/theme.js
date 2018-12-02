import React, { Component } from 'react';


class Theme extends Component {
    getImage(date){
        const imageMap = {
            Monday: ['http://ww1.sinaimg.cn/large/006goifIly1fxkqcn92wnj30v90s8b29.jpg',
                'http://ww1.sinaimg.cn/large/006goifIly1fxkqcnjqtxj30v90sakjl.jpg'],
            Tuesday: ['http://ww1.sinaimg.cn/large/006goifIly1fxkqcnsbh7j30v90sahdt.jpg',
                'http://ww1.sinaimg.cn/large/006goifIly1fxkqcss2m3j30v90kne81.jpg'],
            Wednesday: ['http://ww1.sinaimg.cn/large/006goifIly1fxkqck88mzj30v90s61kx.jpg',
                'http://ww1.sinaimg.cn/large/006goifIly1fxkqcdmmm8j30v90rjb29.jpg'],
            Thursday: ['http://ww1.sinaimg.cn/large/006goifIly1fxkqd6766hj30v90s8npd.jpg',
                'http://ww1.sinaimg.cn/large/006goifIly1fxkqcehy3aj30v90r94qp.jpg'],
            Friday:['http://ww1.sinaimg.cn/large/006goifIly1fxkqctm5ocj30v90s6e81.jpg',
                'http://ww1.sinaimg.cn/large/006goifIly1fxkqd96f0oj30v90s6kjl.jpg'],
            Saturday: ['http://ww1.sinaimg.cn/large/006goifIly1fxkqd6j67bj30v90t3u0x.jpg',
                'http://ww1.sinaimg.cn/large/006goifIly1fxkqd5h474j30v90tcx6p.jpg'],
            Sunday: ['http://ww1.sinaimg.cn/large/006goifIly1fxkqcc8lv4j30v90kn1kx.jpg',
                'http://ww1.sinaimg.cn/large/006goifIly1fxkqcdipxuj30v90jdqmt.jpg']
        }
        const random = Math.floor(Math.random()*100) % 2;
        return imageMap[date.format('dddd')][random];
    }

    render() {
        return (
            <div className="Theme">
                <img className="Theme__img" src={this.getImage(this.props.date)} alt="theme"/>
                <small>ref: miniature-calendar.com</small>
            </div>
        );
    }
}

export default Theme;