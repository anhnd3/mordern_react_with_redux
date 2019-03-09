import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

export class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userID);
  }
  render() {
    // console.log(this.props.users);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userID) };
};

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
