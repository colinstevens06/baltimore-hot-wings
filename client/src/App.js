import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import RestaurantPage from "./pages/Restaurants"

// COMPONENTS
import Nav from "./components/Nav"

function App() {
  return (
    <div>
      <Nav />
      <RestaurantPage />

    </div>

  )
}

export default App;
