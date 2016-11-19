import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('../../../scss/style.scss');
import Navigation from './navigation'
import Content from './content'

class Body extends Component {
  render() {
    return (
      <div className="body_cls">
        <Navigation />
        <Content />
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

export default connect(mapStateToProps)(Body);
