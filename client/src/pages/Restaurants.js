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
  const [priceSort, setPriceSort] = useState(0)
  const [nameSort, setNameSort] = useState(true)
  const [sortType, setSortType] = useState(undefined)

  useEffect(() => {
    const findDate = new Date().getDay()
    setToday(findDate)
  }, [])

  const dayOfWeekFilter = input => {
    setToday(input)
  }

  const neighborHoodFilter = input => {
    setNeighborhood(input)
  }

  const sortThePrice = () => {
    setNameSort(false)
    setPriceSort((priceSort + 1) % 3)
    setSortType("price")
  }

  const sortTheNames = () => {
    setSortType("names")
    setPriceSort(0)
    setNameSort(!nameSort)
  }

  return (
    <div>
      {(today || today === 0) &&
        <div>
          <Container fluid className="hero-container">

            <div className="wings-hero-image"></div>
            <Container>
              <HeroLanding />
            </Container>
          </Container>

          <Container fluid className="sub-head-container dark-bg">
            <Container>

              <LandingSubHeroContainer
                todayValue={today}
                click={dayOfWeekFilter}
                hoodValue={neighborhood}
                hoodFilter={neighborHoodFilter}
                priceClick={sortThePrice}
                nameClick={sortTheNames}
              />

              <CardWrapper
                todayValue={today}
                neighborhoodValue={neighborhood}
                nameSortValue={nameSort}
                priceSortValue={priceSort}
                sortTypeValue={sortType}
              />

            </Container>
          </Container>

        </div>
      }

    </div >
  );
}

export default RestaurantPage;