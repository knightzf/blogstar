import React, {Component} from 'react';
import Banner from './banner'
import Navigation from './navigation'
import Body from './body'

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Body />
      </div>
    );
  }
}

export default Home;
