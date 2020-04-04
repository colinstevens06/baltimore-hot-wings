import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//add the pages
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

    this.state = { loggedInStatus: '' };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (this.state.loggedInStatus === '') {
      this.setState({ loggedInStatus: "NOT_LOGGED_IN" })
    }
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
          <p className="d-none">{this.state.loggedInStatus}</p>
          <Nav />
          <Switch>
            <Route path="/login" render={props => (<LogIn {...props} loggedInStatus={this.state.loggedInStatus} handleLogin={this.handleLogin} />)} />
            <Route path="/admin" render={props => (<><AdminForm {...props} loggedInStatus={this.loggedInStatus} /></>)} />
            <Route exact path="/">
              <RestaurantPage />
            </Route>
            <Route exact path="/restaurants/:id">
              <IndividualPage />
            </Route>
            <Route exact path="/spinner">
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

