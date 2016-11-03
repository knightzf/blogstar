import React, {Component} from 'react';
//import UserList from '../containers/user-list';
//import UserDetails from '../containers/user-detail';
import RaisedButton from 'material-ui/RaisedButton';
require('../../../scss/style.scss');
import logo_img from '../../../res/img/logo.png'
import Settings from './settings'

class Home extends Component {
  render() {
    return (
      <div className="banner_cls">
        <div className="left_side_cls">
          <div className="logo_cls">
            <img src={logo_img} />
          </div>
        </div>
        <div className="right_side_cls">
          <div className="search_div_cls">
              <input className="search_input_cls" name="search" placeholder="Search" type="text" />
              <RaisedButton label="Search" />
          </div>
          <Settings />
        </div>
      </div>
    );
  }
}

export default Home;
