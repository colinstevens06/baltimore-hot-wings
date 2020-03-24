import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import RestaurantPage from "./pages/Restaurants"
import IndividualPage from "./pages/Individual"
import NoMatch from "./pages/NoMatch"
import LogIn from "./pages/LogIn"

// COMPONENTS
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/home">
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

export default App;
