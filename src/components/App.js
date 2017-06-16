import React, { Component } from 'react';

// Components
import Header from './Header';
import LeftNav from './LeftNav';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <LeftNav />
        </div>
      </div>
    );
  }
}
