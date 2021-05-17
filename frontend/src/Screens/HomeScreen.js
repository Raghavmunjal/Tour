import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Explore from '../Components/Explore'
import TourPackages from '../Components/TourPackages'
import EnjoyTrip from '../Components/EnjoyTrip'
import TourDestinations from '../Components/TourDestinations'
import PicsCarousel from '../Components/PicsCarousel'
import Experience from '../Components/Experience'
import PlanTrip from '../Components/PlanTrip'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <>
      <PicsCarousel />
      <Explore />
      <Experience />
      <PlanTrip />
      <div>
        <Container>
          <Row>
            <Col>
              <p
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '40px',
                }}
              >
                Discover Our Tour Packages
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                className='px-5 '
                style={{
                  textAlign: 'center',
                  color: 'gray',
                  fontSize: '17px',
                }}
              >
                Vestibulum tellus neque, sodales vel mauris at, rhoncus finibus
                augue. Vestibulum urna <br />
                ligula, molestie at ante ut, finibus vulputate felis.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>

      <TourPackages />

      <Container>
        <Row>
          <Col>
            <center>
              <Link to='/package'>
                <Button variant='primary'>View All Packages</Button>
              </Link>
            </center>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
      </Container>

      <EnjoyTrip />
      <TourDestinations />
    </>
  )
}

export default HomeScreen
