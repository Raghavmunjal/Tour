import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const EnjoyTrip = () => {
  return (
    <>
      <div className='back_image'>
        <div className='overlay-all'>
          <Container>
            <Row>&nbsp;</Row>
            <Row>&nbsp;</Row>
            <Row>
              <Col sm={12} md={8} lg={6}>
                <h2
                  className='mb-4'
                  style={{ fontSize: '35px', color: 'white' }}
                >
                  Enjoy The Trip
                </h2>
                <p
                  className='mb-4'
                  style={{ fontSize: '15px', color: 'white' }}
                >
                  Duis nisi sapien, elementum finibus fermentum eget, aliquet
                  leo et. Mauris hendrerit vel ex. Quisque vitae luctus massa.
                  Phasellus sed aliquam leo a massa eu fringilla. Integer
                  ultrices finibus sed nisi. in convallis felis dapibus sit
                  amet.
                </p>
                <LinkContainer to='/book'>
                  <Button className='mb-4'>Book Now</Button>
                </LinkContainer>
              </Col>
            </Row>
            <Row>&nbsp;</Row>
            <Row>&nbsp;</Row>
          </Container>
        </div>
      </div>

      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
    </>
  )
}

export default EnjoyTrip
