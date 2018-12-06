import React, { Component } from 'react';

class Music extends Component {
    render() {
        return (
            <div>
                <h3 className="Player_title">MUSIC</h3>

                <iframe
                    frameBorder="no"
                    title="brano"
                    border="0"
                    marginWidth="0"
                    marginHeight="0"
                    src="//music.163.com/outchain/player?type=2&id=27874327&auto=0&height=66" />
            </div>
        )
    }

}

export default Music;





