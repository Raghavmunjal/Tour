import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Places from './Places'
import packages from '../data/packages'
const TourPackages = () => {
  return (
    <>
      <Container>
        <Row>
          {packages.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Places items={item} />
                {/* places component */}
              </Col>
            )
          })}
        </Row>
        <Row>&nbsp;</Row>
      </Container>
    </>
  )
}

export default TourPackages
