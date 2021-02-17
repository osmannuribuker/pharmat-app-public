import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { currentUserAction } from "../actions/authenticationActions";
import PageLoading from "../components/Loading";

class SecureLayout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(currentUserAction());
    }
  }

  render() {
    const { children, currentUser } = this.props;
    const isLogin = currentUser && currentUser.username && currentUser.email;
    if (!isLogin && !currentUser?.code) {
      return <PageLoading />;
    }
    if (!isLogin) {
      return <Redirect to="/login" />;
    }
    return children;
  }
}

const mapStateToProps = (response) => ({
  currentUser: response.currentUser.response,
});

export default connect(mapStateToProps)(SecureLayout);
