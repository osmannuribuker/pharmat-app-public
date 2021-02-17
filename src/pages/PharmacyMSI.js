import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createPharmacyMSIAction,
  getPharmacyMSIAction,
  updatePharmacyMSIAction,
} from "../actions/pharmacyMSIActions";
import { Drawer } from "antd";
import PharmacyInput from "../components/form/PharmacyInput";
import Select from "react-select";
import { getMedicineStoresAction } from "../actions/medicineStoresAction";
import { currentUserAction } from "../actions/authenticationActions";

class PharmacyMSIPage extends Component {
  state = {
    visible: false,
    type: "create",
    ms: "",
    pharmacy_code: "",
    username: "",
    password: "",
    id: "",
    disabled: false,
  };
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(
        getPharmacyMSIAction(() => {
          dispatch(getMedicineStoresAction());
        })
      );
    }
  }
  showDrawerForCreate = () => {
    this.setState({
      visible: true,
      disabled: false,
    });
  };

  showDrawerForUpdate = (event, pharmacy) => {
    event.preventDefault();
    console.log(event, pharmacy);
    Object.keys(pharmacy).map((key) => {
      console.log(key);
      this.setState({
        [key]: pharmacy[key],
      });
    });
    this.setState({ disabled: true, visible: true });
    console.log(this.state.password);
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onCreatePharmacyMSI = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const data = {
      ms: this.state.ms,
      pharmacy_code: this.state.pharmacy_code,
      username: this.state.username,
      password: this.state.password,
    };
    dispatch(
      createPharmacyMSIAction(
        data,
        () => {
          dispatch(
            getPharmacyMSIAction(() => {
              dispatch(currentUserAction());
              this.setState({
                visible: false,
              });
            })
          );
        },
        (error) => {
          console.log("sagadan gelen", error);
        }
      )
    );
  };

  onUpdatePharmacyMSI = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const data = {
      ms: this.state.ms,
      pharmacy_code: this.state.pharmacy_code,
      username: this.state.username,
      password: this.state.password,
    };
    dispatch(
      updatePharmacyMSIAction(
        data,
        this.state.id,
        () => {
          dispatch(
            getPharmacyMSIAction(() => {
              dispatch(currentUserAction());
              this.setState({
                visible: false,
                disabled: false,
              });
            })
          );
        },
        (error) => {
          console.log("sagadan gelen", error);
        }
      )
    );
  };

  render() {
    const pharmacyMsi = this.props.pharmacyMsi;
    const msies = [];
    const inputs = [
      {
        id: "pharmacy_code",
        name: "Eczane Kodu: ",
        value: this.state.pharmacy_code,
        onChange: this.onChange,
        placeholder: "Eczane kodunuzu giriniz",
      },
      {
        id: "username",
        name: "Kullanıcı Adı: ",
        value: this.state.username,
        onChange: this.onChange,
        placeholder: "Kullanıcı adınızı giriniz",
      },
      {
        id: "password",
        name: "Şifre: ",
        value: this.state.password,
        onChange: this.onChange,
        placeholder: "Şifrenizi giriniz",
      },
    ];
    if (this.props.medicineStores) {
      this.props.medicineStores.map((ms, index) => {
        let item = { value: ms.id, label: ms.name };
        msies.push(item);
      });
    }
    return (
      <>
        <div className="row">
          <div className="col-lg-12">
            <div className="card m-b-20">
              <div className="card-body">
                <h4 className="mt-0 header-title">
                  Ecza Depoları Web Giriş Bilgileriniz
                </h4>
                <p className="text-muted m-b-30">
                  Buradaki bilgiler ecza depolarından ilaç teklifi alabilmeniz
                  için <code>gereklidir</code>. Eğer aşağıdaki listede
                  kullandığınız <code>ecza deposu</code> veya{" "}
                  <code>şubesi</code> yok ise lütfen bunu bize bildiriniz.
                </p>
                <table className="table table-striped mb-0">
                  <thead>
                    <tr className="text-center">
                      <th colSpan="6">
                        <button
                          onClick={this.showDrawerForCreate}
                          type="button"
                          className="btn btn-outline-info btn-lg btn-block waves-effect waves-light"
                        >
                          Yeni ecza deposu bilgileri oluştur
                        </button>
                      </th>
                    </tr>
                    <tr>
                      <th>#</th>
                      <th>Depo Adı</th>
                      <th>Eczane Kodu</th>
                      <th>Kullanıcı Adı</th>
                      <th>Şifre</th>
                      <th>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pharmacyMsi?.error ? (
                      <tr className="text-center">
                        <td colSpan="6">
                          <code>{pharmacyMsi.error}</code>
                        </td>
                      </tr>
                    ) : (
                      pharmacyMsi?.map((pharmacy, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{pharmacy.id}</th>
                            <td>{pharmacy.ms__name}</td>
                            <td>{pharmacy.pharmacy_code}</td>
                            <td>{pharmacy.username}</td>
                            <td>{pharmacy.password}</td>
                            <td>
                              <button
                                className="btn btn-info"
                                onClick={(event) => {
                                  this.showDrawerForUpdate(event, pharmacy);
                                }}
                              >
                                Güncelle
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Drawer
          title={
            this.state.disabled
              ? "Seçili ecza deposu bilgilerini güncelle"
              : "Yeni ecza deposu bilgileri oluştur"
          }
          width={"50%"}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <button
                onClick={this.onClose}
                style={{ marginRight: 8 }}
                className="btn btn-danger"
              >
                İptal
              </button>
              <button
                onClick={
                  this.state.disabled
                    ? this.onUpdatePharmacyMSI
                    : this.onCreatePharmacyMSI
                }
                type="submit"
                className="btn btn-primary"
              >
                {this.state.disabled ? "Güncelle" : "Oluştur"}
              </button>
            </div>
          }
        >
          <div className="card-body">
            <h4 className="mt-0 header-title text-center">
              Ecza Deposu Bilgileriniz
            </h4>
            <p className="text-muted m-b-30 text-center">
              Lütfen ecza deposu bilgilerinizi giriniz.
            </p>
            <form className="form-horizontal m-t-30">
              <PharmacyInput inputs={inputs} />
              <div className="form-group row">
                <label htmlFor="city" className="col-sm-2 col-form-label">
                  Ecza Deposu:
                </label>
                <div className="col-sm-10">
                  <Select
                    options={msies}
                    value={msies.filter((ms) =>
                      ms.value === this.state.ms ? this.state.ms : null
                    )}
                    id="ms"
                    className="select"
                    onChange={(event) => {
                      this.setState({ ms: event.value });
                    }}
                    placeholder="Lütfen bir depo seçiniz"
                    isDisabled={this.state.disabled}
                  />
                </div>
              </div>
            </form>
          </div>
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = (response) => ({
  pharmacyMsi: response.pharmacyMsi.response,
  medicineStores: response.medicineStores.response,
});

export default connect(mapStateToProps)(PharmacyMSIPage);
