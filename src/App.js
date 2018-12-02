import React, { Component } from 'react';
import Header from './components/header';
// import CurrentDate from './components/current_date';
// import Theme from './components/theme';
// import Info from './components/info';
import Footer from './components/footer';
import moment from 'moment';
import Daily from './components/daily';
import Lunar from './components/lunar';
import './App.css';

class App extends Component {
  state = {
    date: moment(),
  }

  changeDate = (date) => {
    this.setState({date});
  }

  render() {
    //const now = moment();
    
    return (
      <div className="App">
        <Header changeDate={this.changeDate} />
        {this.state.date ? 
          (<Daily date={this.state.date} />) : 
          (<Lunar changeDate={this.changeDate} />)
        }
        <Footer />
      </div>
    );
  }
}

export default App;
