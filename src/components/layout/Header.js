import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box page-title-box-dark">
            <h4 className="page-title">
              {this.props.pharmacy
                ? this.props.pharmacy.name
                : "Lütfen bir eczane oluşturunuz"}
            </h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <button className="link-button">Pharmat</button>
              </li>
              <li className="breadcrumb-item active">
                <button className="link-button">Anasayfa</button>
              </li>
            </ol>

            <div className="state-information d-none d-sm-block">
              Güncel bakiye 71000 &#8378;
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
