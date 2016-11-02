import React from 'react';
//import UserList from '../containers/user-list';
//import UserDetails from '../containers/user-detail';
import RaisedButton from 'material-ui/RaisedButton';
require('../../../scss/style.scss');
import logo_img from '../../../res/img/logo.png'

const Home = () => (
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
    <div className="setting_div_cls">
      <RaisedButton label="Sign In" className="setting_btn_cls"/>
      <RaisedButton label="Settings" className="setting_btn_cls"/>
    </div>
  </div>
</div>
);

export default Home;
