import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
require('../../../scss/style.scss');

class Navigation extends Component {
  render() {
    var icon_style = { fontSize: "24px",
      color: "rgba(0, 0, 0, 0.54)"
    };

    var topData = [
      {
        id: 1,
        iconName: "home",
        label: "Home"
      },
      {
        id: 2,
        iconName: "account_circle",
        label: "My Blogs"
      },
      {
        id: 3,
        iconName: "list",
        label: "Subscriptions"
      }
    ];

    var topList = topData.map((row) => {
      return (
        <tr className="nav_row_cls" key={row.id}>
          <td className="icon_cell_cls">
            <i className="material-icons" style={icon_style}>{row.iconName}</i>
          </td>
          <td className="label_cell_cls">
            {row.label}
          </td>
          <td className="count_cell_cls">
          </td>
        </tr>
      );
    });

    var subscriptionData = [
      {
        id: 1,
        avatar: require("../../../res/img/panda.png"),
        blogName: "Love Live",
        newPosts: 2
      }
    ];

    var subscriptionList = subscriptionData.map((row) => {
      return (
        <tr className="nav_row_cls" key={row.id}>
          <td className="icon_cell_cls">
            <Avatar size={24} src={row.avatar} />
          </td>
          <td className="label_cell_cls">
            {row.blogName}
          </td>
          <td className="count_cell_cls">
            {row.newPosts}
          </td>
        </tr>
      );
    });

    return (
      <div className="left_side_cls">
        <div className="div_cls">
          <Divider />
        </div>

        <table className="nav_table_cls">
          <tbody>
            {topList}
          </tbody>
        </table>

        <div className="div_cls">
          <Divider />
        </div>

        <div className="lib_div_cls">LIBRARY</div>
        <div className="div_cls" />
        <table className="nav_table_cls">
          <tbody>
            <tr className="nav_row_cls">
              <td className="icon_cell_cls">
                <i className="material-icons" style={icon_style}>thumb_up</i>
              </td>
              <td className="label_cell_cls">
                Liked Posts
              </td>
              <td className="count_cell_cls">
              </td>
            </tr>
          </tbody>
        </table>

        <div className="div_cls">
          <Divider />
        </div>

        <div className="lib_div_cls">SUBSCRIPTIONS</div>
        <div className="div_cls" />
        <table className="nav_table_cls">
          <tbody>
            {subscriptionList}
          </tbody>
        </table>
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
