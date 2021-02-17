import React from "react";
import { connect } from "react-redux";
import TopBar from "../components/layout/TopBar";
import SideBar from "../components/layout/SideBar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enlarge: null };
  }

  collapse = (event) => {
    if (this.state.enlarge) {
      this.setState({ enlarge: null });
    } else {
      this.setState({ enlarge: "enlarged" });
    }
  };
  render() {
    const children = this.props.children;
    const currentUser = this.props.currentUser;
    return (
      <div className={this.state.enlarge}>
        <div id="wrapper">
          <TopBar collapse={this.collapse} />
          <SideBar />
          <div className="content-page">
            <div className="content">
              <div className="container-fluid">
                <Header pharmacy={currentUser.pharmacy} />
                <div className="page-content-wrapper">{children}</div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  currentUser: response.currentUser.response,
});

export default connect(mapStateToProps)(BasicLayout);
