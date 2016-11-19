import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
require('../../../scss/style.scss');

class Navigation extends Component {
  render() {
    var style = {padding: 0};
    return (
      <div className="left_side_cls">
      <Table style={style}>
        <TableBody
          displayRowCheckbox={false}
        >
          <TableRow
            displayBorder={false}
          >
            <TableRowColumn style={style}>1</TableRowColumn>
            <TableRowColumn style={style}>Home</TableRowColumn>
          </TableRow>
          <TableRow
            displayBorder={false}
          >
            <TableRowColumn style={style}>2</TableRowColumn>
            <TableRowColumn style={style}>My Blogs</TableRowColumn>
          </TableRow>
          <TableRow
            displayBorder={false}
          >
            <TableRowColumn style={style}>3</TableRowColumn>
            <TableRowColumn style={style}>Subscriptions</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

export default connect(mapStateToProps)(Navigation);
