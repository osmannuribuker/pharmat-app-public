import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import HomePage from "../pages/Home";
import DasboardRoutes from "./DashboardRoutes";
import ProductPage from "../pages/ProductPage";
import PharmacyPage from "../pages/Pharmacy";
import PharmacyMSIPage from "../pages/PharmacyMSI";
import GroupPage from "../pages/Group";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <DasboardRoutes path="/product" component={ProductPage} />
          <DasboardRoutes path="/grup" component={GroupPage} />
          <DasboardRoutes path="/eczane" component={PharmacyPage} />
          <DasboardRoutes path="/ecza-depolari" component={PharmacyMSIPage} />
          <DasboardRoutes path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
