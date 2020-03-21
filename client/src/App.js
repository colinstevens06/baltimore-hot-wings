import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import RestaurantPage from "./pages/Restaurants"
import IndividualPage from "./pages/Individual"
import NoMatch from "./pages/NoMatch"

// COMPONENTS
import Nav from "./components/Nav"

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/">
          <RestaurantPage />
        </Route>
        <Route exact path="/restaurants/:id">
          <IndividualPage />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>

    </div>

  )
}

export default App;
