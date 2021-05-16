import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PopularPlaces from './PopularPlaces'
import destinations from '../data/destination'
const TourDestinations = () => {
  return (
    <>
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
                Popular Destinations
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
      <Container>
        <Row>
          {destinations.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <PopularPlaces items={item} />
                {/* Popular Places Component */}
              </Col>
            )
          })}
        </Row>
        <Row>&nbsp;</Row>
      </Container>
    </>
  )
}

export default TourDestinations
