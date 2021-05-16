import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Service from '../Components/Service'
import EnjoyTrip from '../Components/EnjoyTrip'
import TourPackages from '../Components/TourPackages'
const ServiceScreen = () => {
  return (
    <>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>

      <Service />
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>

      <EnjoyTrip />
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
                Tourism Places
              </p>
            </Col>
          </Row>

          <TourPackages />
        </Container>
      </div>
    </>
  )
}

export default ServiceScreen
