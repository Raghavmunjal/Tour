import React from 'react'
import { Carousel, Row, Col, Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import caro from '../data/caro'
const PicsCarousel = () => {
  return (
    <>
      <Carousel fade pause='hover' interval='8000' className='carousel'>
        {caro.map((item) => (
          <Carousel.Item key={caro._id}>
            <img className='d-block w-100 imgg' src={item.img} alt={item._id} />
            <Container>
              <Carousel.Caption className='carousel-caption'>
                <Row>
                  <Col sm={12} lg={6}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={6}>
                    <LinkContainer to='/about'>
                      <Button className='carousel-button  me-2'>
                        About Us
                      </Button>
                    </LinkContainer>
                    <LinkContainer to='/book'>
                      <Button className='carousel-button'>Book Now</Button>
                    </LinkContainer>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
    </>
  )
}

export default PicsCarousel
