import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('../../../scss/style.scss');

class Settings extends Component {
  render() {
    return (
      <div className="setting_div_cls">
        {this.props.userinfo.loggedIn ?
            null
            : <RaisedButton label="Sign In" className="setting_btn_cls" /> }
        <RaisedButton label="Settings" className="setting_btn_cls" />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

export default connect(mapStateToProps)(Settings);
