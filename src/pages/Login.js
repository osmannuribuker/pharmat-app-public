import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../actions/authenticationActions";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  componentDidUpdate() {
    if (this.props.response.login.response?.access) {
      this.setState({ isLogin: true });
    }
  }
  onHandleLogin = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username,
      password,
    };
    this.props.dispatch(loginUserAction(data));
  };

  render() {
    if (this.state.isLogin) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="account-pages">
          <div className="wrapper-page">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center m-0">
                  <Link to="/" className="logo logo-admin">
                    <img src="assets/images/logo.png" height="41" alt="logo" />
                  </Link>
                </h3>

                <div className="p-3">
                  <h4 className="text-muted font-18 m-b-5 text-center">
                    Hoşgeldiniz
                  </h4>
                  <p className="text-muted text-center">
                    Devam etmek için lütfen giriş yapınız.
                  </p>

                  <form
                    className="form-horizontal m-t-30"
                    onSubmit={this.onHandleLogin}
                  >
                    <div className="form-group">
                      <label htmlFor="username">Kullanıcı adı</label>
                      <input
                        type="username"
                        className="form-control"
                        id="username"
                        placeholder="Kullanıcı adınızı giriniz"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="userpassword">Şifre</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Şifrenizi giriniz"
                      />
                    </div>

                    <div className="form-group row m-t-20">
                      <div className="col-6">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlInline"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customControlInline"
                          >
                            Beni hatırla
                          </label>
                        </div>
                      </div>
                      <div className="col-6 text-right">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Giriş yap
                        </button>
                      </div>
                    </div>

                    <div className="form-group m-t-10 mb-0 row">
                      <div className="col-12 m-t-20">
                        <button className="text-muted link-button">
                          <i className="mdi mdi-lock"></i> Şifrenizi mi
                          unuttunuz?
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="m-t-40 text-center">
              <p className="text-white-50">
                Bir hesabınız yok mu ?
                <button className="text-white link-button">
                  Şimdi kaydolun
                </button>
              </p>
              <p className="text-muted">
                © 2021 PharmaTrade. Crafted with
                <i className="mdi mdi-heart text-danger"></i> by Kavunlab
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);
