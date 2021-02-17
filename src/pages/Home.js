import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductAction } from "../actions/productActions";
import "antd/dist/antd.css";

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(getProductAction(1));
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-info mini-stat position-relative">
            <div className="card-body">
              <div className="mini-stat-desc">
                <h6 className="text-uppercase verti-label text-white-50">
                  Aktif
                </h6>
                <div className="text-white">
                  <h6 className="text-uppercase mt-0 text-white-50">
                    Oluşturduğunuz Takaslar
                  </h6>
                  <h3 className="mb-3 mt-0">2</h3>
                  <div className="">
                    <span className="badge badge-light text-info">
                      3.456 &#8378;
                    </span>
                    <span className="ml-2">Kazanılan toplam tutar</span>
                  </div>
                </div>
                <div className="mini-stat-icon">
                  <i className="mdi mdi-cube-outline display-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger mini-stat position-relative">
            <div className="card-body">
              <div className="mini-stat-desc">
                <h6 className="text-uppercase verti-label text-white-50">
                  Aktif
                </h6>
                <div className="text-white">
                  <h6 className="text-uppercase mt-0 text-white-50">
                    Katıldığınız Takaslar
                  </h6>
                  <h3 className="mb-3 mt-0">5</h3>
                  <div className="">
                    <span className="badge badge-light text-info">
                      5.767 &#8378;
                    </span>
                    <span className="ml-2">Borçlanılan toplam tutar</span>
                  </div>
                </div>
                <div className="mini-stat-icon">
                  <i className="mdi mdi-buffer display-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary mini-stat position-relative">
            <div className="card-body">
              <div className="mini-stat-desc">
                <h6 className="text-uppercase verti-label text-white-50">
                  Başarılı
                </h6>
                <div className="text-white">
                  <h6 className="text-uppercase mt-0 text-white-50">
                    Oluşturduğunuz Takaslar
                  </h6>
                  <h3 className="mb-3 mt-0">56</h3>
                  <div className="">
                    <span className="badge badge-light text-info">
                      56.377 &#8378;
                    </span>
                    <span className="ml-2">Kazanılan toplam tutar</span>
                  </div>
                </div>
                <div className="mini-stat-icon">
                  <i className="mdi mdi-tag-text-outline display-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success mini-stat position-relative">
            <div className="card-body">
              <div className="mini-stat-desc">
                <h6 className="text-uppercase verti-label text-white-50">
                  Başarılı
                </h6>
                <div className="text-white">
                  <h6 className="text-uppercase mt-0 text-white-50">
                    Katıldığınız Takaslar
                  </h6>
                  <h3 className="mb-3 mt-0">122</h3>
                  <div className="">
                    <span className="badge badge-light text-info">
                      47.555 &#8378;
                    </span>
                    <span className="ml-2">Borçlanılan toplam tutar</span>
                  </div>
                </div>
                <div className="mini-stat-icon">
                  <i className="mdi mdi-briefcase-check display-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  data: response.products,
});

export default connect(mapStateToProps)(HomePage);
