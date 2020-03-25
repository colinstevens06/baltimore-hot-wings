import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RestaurantPage from "./pages/Restaurants"
import IndividualPage from "./pages/Individual"
import NoMatch from "./pages/NoMatch"
import LogIn from "./pages/LogIn"

// COMPONENTS
import Nav from "./components/Nav"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: data
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path={"/login"}
              render={props => (
                <LogIn
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.loggedInStatus}
                />
              )}
            >
            </Route>
            <Route exact path="/">
              <Nav />
              <RestaurantPage />
            </Route>
            <Route exact path="/restaurants/:id">
              <Nav />
              <IndividualPage />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>

        </div>
      </Router>

    )
  }
}