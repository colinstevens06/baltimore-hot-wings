import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RestaurantPage from "./pages/Restaurants"
import IndividualPage from "./pages/Individual"
import NoMatch from "./pages/NoMatch"
import SpinnerPage from "./pages/Spinner"

// COMPONENTS
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <RestaurantPage />
          </Route>
          <Route path="/restaurants/:id">
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

export default App;
