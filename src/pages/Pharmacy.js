import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createPharmacyAction,
  getPharmacyAction,
  updatePharmacyAction,
} from "../actions/pharmacyActions";
import Select from "react-select";
import { getCitiesAction } from "../actions/cityAction";
import { getStatesAction } from "../actions/stateAction";
import { currentUserAction } from "../actions/authenticationActions";
import PharmacyInput from "../components/form/PharmacyInput";

class PharmacyPage extends Component {
  constructor(props) {
    super(props);
    this.state = { city_unselect: true, city_id: null, state_id: null };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    console.log(this.props);
    if (dispatch) {
      let currentUser = this.props.currentUser;
      if (currentUser.pharmacy) {
        dispatch(getPharmacyAction(currentUser.pharmacy.id));
        dispatch(getStatesAction(currentUser.pharmacy.city_id));
        this.setState({
          city_unselect: false,
          city_id: currentUser.pharmacy.city_id,
          state_id: currentUser.pharmacy.state_id,
        });
      }
      dispatch(getCitiesAction(1));
    }
  }

  onUpdatePharmacy = (event) => {
    event.preventDefault();
    const currentUser = this.props.currentUser;
    const data = {
      name: event.target.name.value,
      first_phone: event.target.first_phone.value,
      second_phone: event.target.second_phone.value,
      address: event.target.address.value,
      tax_administration: event.target.tax_administration.value,
      tax_number: event.target.tax_number.value,
      identification_number: event.target.identification_number.value,
      gln_number: event.target.gln_number.value,
      state: this.state.state_id,
    };
    this.props.dispatch(
      updatePharmacyAction(
        data,
        currentUser.pharmacy.id,
        () => {
          this.props.dispatch(currentUserAction());
          this.props.dispatch(getPharmacyAction(currentUser.pharmacy.id));
        },
        (error) => {
          console.log("sagadan gelen", error);
        }
      )
    );
  };

  onCreatePharmacy = (event) => {
    event.preventDefault();
    console.log(event);
    const data = {
      name: event.target.name.value,
      first_phone: event.target.first_phone.value,
      second_phone: event.target.second_phone.value,
      address: event.target.address.value,
      tax_administration: event.target.tax_administration.value,
      tax_number: event.target.tax_number.value,
      identification_number: event.target.identification_number.value,
      gln_number: event.target.gln_number.value,
      state: this.state.state_id,
    };
    this.props.dispatch(
      createPharmacyAction(
        data,
        () => this.props.dispatch(currentUserAction()),
        (error) => {
          console.log("sagadan gelen", error);
        }
      )
    );
  };

  onSelectCity = (event) => {
    console.log("güncellendi");
    //let city = event.target.city.value;
    let city_id = event.value;
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(getStatesAction(city_id));
      this.setState({ city_unselect: false, city_id: city_id });
    }
    //this.props.dispatch(updatePharmacyAction(data));
  };

  onSelectState = (event) => {
    let state_id = event.value;
    this.setState({ state_id: state_id });
  };
  render() {
    const pharmacy = this.props.pharmacy;
    const cities = [];
    const states = [];
    const inputs = [
      {
        id: "name",
        name: "Eczane Adı",
        value: pharmacy.name,
      },
      {
        id: "first_phone",
        name: "Birincil Telefon Numarası",
        value: pharmacy.first_phone,
      },
      {
        id: "second_phone",
        name: "İkincil Telefon Numarası",
        value: pharmacy.second_phone,
      },
      {
        id: "address",
        name: "Adres",
        value: pharmacy.address,
      },
      {
        id: "gln_number",
        name: "GLN Numarası",
        value: pharmacy.gln_number,
      },
      {
        id: "identification_number",
        name: "Yetkili TC",
        value: pharmacy.identification_number,
      },
      {
        id: "tax_administration",
        name: "Vergi Dairesi",
        value: pharmacy.tax_administration,
      },
      {
        id: "tax_number",
        name: "Vergi Numarası",
        value: pharmacy.tax_number,
      },
    ];

    if (this.props.cities) {
      this.props.cities.map((item, index) => {
        let city = { value: item.id, label: item.name };
        cities.push(city);
      });
    }
    if (this.props.states) {
      this.props.states.map((item, index) => {
        let state = { value: item.id, label: item.name };
        states.push(state);
      });
    }
    return (
      <div className="row">
        <div className="col-12">
          <div className="card m-b-20">
            <div className="card-body">
              <h4 className="mt-0 header-title">Eczane Bilgileriniz</h4>
              <p className="text-muted m-b-30">
                Bu sayfada eczane bilgilerinizi
                <code className="highlighter-rouge">
                  {" "}
                  {this.props.currentUser.pharmacy
                    ? "güncelleyebilirsiniz"
                    : "oluşturabilirsiniz"}
                </code>
              </p>
              <form
                className="form-horizontal m-t-30"
                onSubmit={
                  this.props.currentUser.pharmacy
                    ? this.onUpdatePharmacy
                    : this.onCreatePharmacy
                }
              >
                <PharmacyInput inputs={inputs} />
                <div className="form-group row">
                  <label htmlFor="city" className="col-sm-2 col-form-label">
                    Bağlı Olduğu İl
                  </label>
                  <div className="col-sm-10">
                    <Select
                      options={cities}
                      value={cities.filter((city) =>
                        city.value === this.state.city_id
                          ? this.state.city_id
                          : null
                      )}
                      id="city"
                      inputId="city"
                      className="select"
                      onChange={this.onSelectCity}
                      placeholder="Lütfen bir şehir seçiniz"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="state" className="col-sm-2 col-form-label">
                    Bağlı Olduğu İlçe
                  </label>
                  <div className="col-sm-10">
                    <Select
                      options={states}
                      value={states.filter((state) =>
                        state.value === this.state.state_id
                          ? this.state.state_id
                          : null
                      )}
                      className="select"
                      inputId="state"
                      onChange={this.onSelectState}
                      placeholder="Lütfen bir ilçe seçiniz"
                      isDisabled={this.state.city_unselect}
                    />
                  </div>
                </div>

                <div className="form-group row center">
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-lg btn-block waves-effect waves-light"
                    >
                      {this.props.currentUser.pharmacy ? "Güncelle" : "Oluştur"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  pharmacy: response.pharmacy,
  cities: response.cities.response,
  states: response.states.response,
  currentUser: response.currentUser.response,
});

export default connect(mapStateToProps)(PharmacyPage);
