import React, { Component } from "react";
import { HomeWrapper, HeaderWrapper } from "./style";
import Admin from "../../components/Admin.jsx";
import SuperAdmin from "../SuperAdmin/index";
import Tab from "../../components/Tab";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Router>
        <HomeWrapper className="HomeWrapper">
          <HeaderWrapper>
            <Admin className="Admin" />
          </HeaderWrapper>

          <Switch>
            <Route path="/home">
              <Tab />
            </Route>
            <Route path="/superAdmin">
              <SuperAdmin />
            </Route>
          </Switch>
        </HomeWrapper>
      </Router>
    );
  }
}

export default Home;
