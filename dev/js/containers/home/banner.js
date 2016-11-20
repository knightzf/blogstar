import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
require('../../../scss/style.scss');
import Settings from './settings'

class Banner extends Component {
  render() {
    return (
      <div className="banner_cls">
        <div className="left_side_cls">
          <div className="logo_cls">
            <img src={require("../../../res/img/logo.png")} />
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

export default Banner;
