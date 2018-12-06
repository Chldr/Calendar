import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <hr />
                <div className="Footer__content">
                    <p className="Footer__content">made by x.qiu</p>
                </div>
                <div className="Attribution">
                    Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
                </div>
            </div>
        );
    }
}

export default Footer;
