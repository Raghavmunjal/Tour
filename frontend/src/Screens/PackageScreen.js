import React from 'react'
import TourPackages from '../Components/TourPackages'
import { Col, Row, Container } from 'react-bootstrap'
import TourDestinations from '../Components/TourDestinations'
const PackageScreen = () => {
  return (
    <>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
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
      <TourPackages />
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <TourDestinations />
    </>
  )
}

export default PackageScreen
