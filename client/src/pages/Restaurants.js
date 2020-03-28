import React, { useState, useEffect } from "react";

// layout features
import Container from 'react-bootstrap/Container';

// importing components
import HeroLanding from "../components/Landing-Hero"
import CardWrapper from "../components/Card-Wrapper"
import LandingSubHeroContainer from "../components/Landing-Sub-Hero-Container"

function RestaurantPage(props) {

  const [today, setToday] = useState(undefined)
  const [neighborhood, setNeighborhood] = useState(undefined)

  useEffect(() => {
    const findDate = new Date().getDay()
    setToday(findDate)
  }, [])

  const dayOfWeekFilter = input => {
    console.log("day of week change")
    setToday(input)
  }

  const neighborHoodFilter = input => {
    console.log("click heard at restaurants.js")
    console.log(input)
    setNeighborhood(input)
  }

  return (
    <div>
      {(today || today === 0) &&
        <div>
          <Container>
            <HeroLanding />
          </Container>

          <Container fluid className="py-4 dark-bg">
            <Container>

              <LandingSubHeroContainer
                todayValue={today}
                click={dayOfWeekFilter}
                hoodFilter={neighborHoodFilter}
                hoodValue={neighborhood}
              />

              <CardWrapper
                todayValue={today}
                neighborhoodValue={neighborhood}
              />

            </Container>
          </Container>

        </div>
      }

    </div>
  );
}

export default RestaurantPage;