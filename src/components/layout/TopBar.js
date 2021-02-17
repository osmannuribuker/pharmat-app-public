import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar-left">
          <Link to="/" className="logo">
            <span>
              <img src="assets/images/logo.png" alt="" height="41" />
            </span>
            <i>
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </i>
          </Link>
        </div>

        <nav className="navbar-custom">
          <ul className="navbar-right d-flex list-inline float-right mb-0">
            <li className="dropdown notification-list d-none d-sm-block">
              <form role="search" className="app-search">
                <div className="form-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ara.."
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </li>

            <li className="dropdown notification-list">
              <button
                className="nav-link link-button dropdown-toggle arrow-none waves-effect waves-light"
                data-toggle="dropdown"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="mdi mdi-bell noti-icon"></i>
                <span className="badge badge-pill badge-info noti-icon-badge">
                  3
                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                <h6 className="dropdown-item-text">Notifications (37)</h6>
                <div className="slimscroll notification-item-list">
                  <button className="dropdown-item link-button notify-item active">
                    <div className="notify-icon bg-success">
                      <i className="mdi mdi-cart-outline"></i>
                    </div>
                    <p className="notify-details">
                      Your order is placed
                      <span className="text-muted">
                        Dummy text of the printing and typesetting industry.
                      </span>
                    </p>
                  </button>
                </div>
                <button className="dropdown-item link-button text-center text-primary">
                  View all <i className="fi-arrow-right"></i>
                </button>
              </div>
            </li>
            <li className="dropdown notification-list">
              <div className="dropdown notification-list nav-pro-img">
                <button
                  className="dropdown-toggle link-button nav-link arrow-none waves-effect nav-user waves-light"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/users/user-4.jpg"
                    alt="user"
                    className="rounded-circle"
                  />
                </button>
                <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                  <button className="dropdown-item link-button">
                    <i className="mdi mdi-account-circle m-r-5"></i>
                    Profile
                  </button>
                  <button className="dropdown-item link-button">
                    <i className="mdi mdi-wallet m-r-5"></i> My Wallet
                  </button>
                  <button className="dropdown-item d-block link-button">
                    <span className="badge badge-success float-right">11</span>
                    <i className="mdi mdi-settings m-r-5"></i> Settings
                  </button>
                  <button className="dropdown-item link-button">
                    <i className="mdi mdi-lock-open-outline m-r-5"></i> Lock
                    screen
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item link-button text-danger">
                    <i className="mdi mdi-power text-danger"></i>
                    Logout
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <ul className="list-inline menu-left mb-0">
            <li className="float-left">
              <button
                onClick={this.props.collapse}
                className="button-menu-mobile open-left waves-effect waves-light"
              >
                <i className="mdi mdi-menu"></i>
              </button>
            </li>
            <li className="d-none d-sm-block">
              <div className="dropdown pt-3 d-inline-block">
                <button
                  className="btn  btn-header waves-effect waves-light dropdown-toggle"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sandıklı Eczacılar Grubu
                </button>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {this.props.groups.map((group) => {
                    return (
                      <div key={group.id}>
                        <button className="dropdown-item link-button">
                          {group.name} Grubu
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  groups: response.currentUser.response.pharmacy.groups,
});

export default connect(mapStateToProps)(TopBar);
