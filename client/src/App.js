import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RestaurantPage from "./pages/Restaurants"
import IndividualPage from "./pages/Individual"
import NoMatch from "./pages/NoMatch"
import LogIn from "./pages/LogIn"
import AdminForm from "./pages/AdminForm"
import SpinnerPage from "./pages/Spinner"

// COMPONENTS
import Nav from "./components/Nav"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: ""
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (this.state.loggedInStatus === "") {
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN"
      })
    }
  }

  handleLogin(data) {
    console.log('THIS IS', data);
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
                <>
                  <Nav />
                  <LogIn
                    {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.loggedInStatus}
                  />
                </>
              )}
            >
            </Route>
            <Route
              exact
              path={"/admin"}
              render={props => (
                <>
                  <Nav />
                  <AdminForm
                    {...props}
                    loggedInStatus={this.loggedInStatus}
                  />
                </>
              )}
            />
            <Route exact path="/">
              <Nav />
              <RestaurantPage />
            </Route>
            <Route exact path="/restaurants/:id">
              <Nav />
              <IndividualPage />
            </Route>
            <Route exact path="/spinner">
              <Nav />
              <SpinnerPage />
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

