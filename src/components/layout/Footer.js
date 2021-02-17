import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        © 2021 Pharmat{" "}
        <span className="d-none d-sm-inline-block">
          - Crafted with <i className="mdi mdi-heart text-danger"></i> by
          Kavunlab.
        </span>
      </footer>
    );
  }
}

export default Footer;
