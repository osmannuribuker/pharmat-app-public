import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    const main_pages = [
      {
        id: 1,
        name: "Anasayfa",
        linkTo: "/",
        icon: "mdi mdi-home",
      },
    ];
    const user_pages = [
      {
        id: 11,
        name: "Eczane Bilgileri",
        linkTo: "/eczane",
        icon: "mdi mdi-account-card-details",
      },
      {
        id: 12,
        name: "Grup Bilgileri",
        linkTo: "/grup",
        icon: "mdi mdi-account-group",
      },
      {
        id: 13,
        name: "Ecza Depoları",
        linkTo: "/ecza-depolari",
        icon: "mdi mdi-store",
      },
    ];
    const currentUser = this.props.currentUser;

    return (
      <div className="left side-menu">
        <div className="slimscroll-menu" id="remove-scroll">
          <div className="user-details">
            <div className="float-left mr-2">
              <img
                src="assets/images/users/user-4.jpg"
                alt=""
                className="thumb-md rounded-circle"
              />
            </div>
            <div className="user-info">
              <div className="dropdown">
                <button
                  className="dropdown-toggle link-button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item link-button">
                      <i className="mdi mdi-account-circle m-r-5"></i> Profile
                      <div className="ripple-wrapper"></div>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item link-button">
                      <i className="mdi mdi-settings m-r-5"></i> Settings
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item link-button">
                      <i className="mdi mdi-lock-open-outline m-r-5"></i> Lock
                      screen
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item link-button">
                      <i className="mdi mdi-power m-r-5"></i> Logout
                    </button>
                  </li>
                </ul>
              </div>

              <p className="text-white-50 m-0">{currentUser.username}</p>
            </div>
          </div>
          <div id="sidebar-menu">
            <ul className="metismenu" id="side-menu">
              <li className="menu-title">Pharmat</li>
              {main_pages.map((page, index) => {
                let isActive =
                  page.linkTo === window.location.pathname ? "active" : "";
                return (
                  <li className={isActive} key={index}>
                    <Link
                      to={page.linkTo}
                      className={"waves-effect " + isActive}
                    >
                      <i className={page.icon}></i>
                      <span> {page.name} </span>
                    </Link>
                  </li>
                );
              })}

              <li className="menu-title">Kullanıcı Ayarları</li>
              {user_pages.map((page, index) => {
                let isActive =
                  page.linkTo === window.location.pathname ? "active" : "";
                return (
                  <li className={isActive} key={index}>
                    <Link
                      to={page.linkTo}
                      className={"waves-effect " + isActive}
                    >
                      <i className={page.icon}></i>
                      <span> {page.name} </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  currentUser: response.currentUser.response,
});

export default connect(mapStateToProps)(SideBar);
