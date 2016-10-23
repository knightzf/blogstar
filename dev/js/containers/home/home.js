import React from 'react';
//import UserList from '../containers/user-list';
//import UserDetails from '../containers/user-detail';
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
      <form>
        <input className="search_input_cls" name="search" placeholder="Search" type="text" />
        <input className="search_btn_cls" type="submit" value="Submit" />
      </form>
    </div>
    <div className="setting_div_cls">
      <input className="sign_btn_cls" type="submit" value="Sign In" />
      <input className="setting_btn_cls" type="submit" value="Settings" />
    </div>
  </div>
</div>
);

export default Home;
