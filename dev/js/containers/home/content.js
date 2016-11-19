import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('../../../scss/style.scss');

class Content extends Component {
  render() {
    return (
      <div className="right_side_cls">
        <ul>
          <li>aaaaaaaaaa</li>
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

export default connect(mapStateToProps)(Content);
