import React from 'react'
import { Carousel, Row, Col, Button, Container } from 'react-bootstrap'
import caro from '../data/caro'
import p5 from '../images/p5.jpg'
import packages from '../data/packages'
import Places from '../Components/Places'

const HomeScreen = () => {
  return (
    <>
      <Carousel fade pause='hover' interval='8000' className='carousel'>
        {caro.map((item) => (
          <Carousel.Item key={caro._id}>
            <img className='d-block w-100' src={item.img} alt={item._id} />
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
                    <Button className='carousel-button  me-2'>About Us</Button>
                    <Button className='carousel-button'>Book Now</Button>
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
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <h4 className='mb-5 mt-4'>
              We Will Take You To The Top Destination In The World,{' '}
              <strong>Explore With Us!</strong>
            </h4>
            <p className='mb-5'>
              Duis nisi sapien, elementum finibus fermentum eget, aliquet leo
              et. Mauris hendrerit vel ex. Quisque vitae luctus massa. Phasellus
              sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla.
              Integer ultrices finibus sed nisi. in convallis felis dapibus sit
              amet.
            </p>
            <p className='mb-5'>
              Donec a arcu et sapien hendrerit accumsan. Pellentesque sit amet
              eros iac, elementum urna ipsum accumsan, iaculis ligula. Aenean
              quam eget maximus in convallis felis dapibus sit amet.
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <img
              src={p5}
              alt='p5'
              style={{ height: '420px', width: '500px' }}
            />
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col sm={6} md={6} lg={3}>
            <ul>
              <li>
                <i
                  className='far fa-smile fa-2x px-3'
                  style={{ color: '#1da1f2' }}
                ></i>
              </li>
              <li>
                <h3 style={{ color: 'black', fontSize: '35px' }}>1000 +</h3>
              </li>
              <li>
                <span className='text-muted ' style={{ fontSize: '15px' }}>
                  HAPPY CUSTOMERS
                </span>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <ul>
              <li>
                <i
                  className='fas fa-ship fa-2x px-3'
                  style={{ color: '#1da1f2' }}
                ></i>
              </li>
              <li>
                <h3 style={{ color: 'black', fontSize: '35px' }}>2271</h3>
              </li>
              <li>
                <span className='text-muted ' style={{ fontSize: '15px' }}>
                  TOURS & TRAVELS
                </span>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <ul>
              <li>
                <i
                  className='fas fa-users fa-2x px-3'
                  style={{ color: '#1da1f2' }}
                ></i>
              </li>
              <li>
                <h3 style={{ color: 'black', fontSize: '35px' }}>200</h3>
              </li>
              <li>
                <span className='text-muted' style={{ fontSize: '15px' }}>
                  DESTINATIONS
                </span>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <ul>
              <li>
                <i
                  className='fas fa-gift fa-2x px-3'
                  style={{ color: '#1da1f2' }}
                ></i>
              </li>
              <li>
                <h3 style={{ color: 'black', fontSize: '35px' }}>
                  20 +
                  <span className='text-muted' style={{ fontSize: '20px' }}>
                    years
                  </span>
                </h3>
              </li>
              <li>
                <span className='text-muted' style={{ fontSize: '15px' }}>
                  EXPERIENCE
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <div style={{ backgroundColor: '#1da1f2' }}>
        <Container>
          <Row>
            <Col>
              <h2
                className='py-5'
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '40px',
                }}
              >
                How To Plan Your Trip
              </h2>
            </Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col sm={6} md={6} lg={4}>
              <ul>
                <li>
                  <i
                    class='fas fa-map-signs fa-3x'
                    style={{
                      color: '#1da1f2',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      border: '20px solid white',
                    }}
                  ></i>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: '22px',
                    }}
                  >
                    PICK DESTINATION
                  </h5>
                </li>
                <li>
                  <p
                    style={{
                      textAlign: 'center',
                      color: 'lightgray',
                      fontSize: '16px',
                    }}
                  >
                    Vestibulum urna ligula, molestie at ante ut, finibus.
                    Integer ultrices finibus sed nisi in convallis sed dolor.
                  </p>
                </li>
              </ul>
            </Col>
            <Col sm={6} md={6} lg={4}>
              <ul>
                <li>
                  <i
                    class='far fa-calendar-alt fa-3x'
                    style={{
                      color: '#1da1f2',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      border: '20px solid white',
                    }}
                  ></i>
                </li>
                <li>
                  <h2
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: '22px',
                    }}
                  >
                    SELECT DATE
                  </h2>
                </li>
                <li>
                  <p
                    style={{
                      textAlign: 'center',
                      color: 'lightgray',
                      fontSize: '16px',
                    }}
                  >
                    Vestibulum urna ligula, molestie at ante ut, finibus.
                    Integer ultrices finibus sed nisi in convallis sed dolor.
                  </p>
                </li>
              </ul>
            </Col>
            <Col sm={6} md={6} lg={4}>
              <ul>
                <li>
                  <i
                    class='fas fa-gift fa-3x'
                    style={{
                      color: '#1da1f2',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      border: '20px solid white',
                    }}
                  ></i>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: '22px',
                    }}
                  >
                    ENJOY THE TRIP
                  </h5>
                </li>
                <li>
                  <p
                    style={{
                      textAlign: 'center',
                      color: 'lightgray',
                      fontSize: '16px',
                    }}
                  >
                    Vestibulum urna ligula, molestie at ante ut, finibus.
                    Integer ultrices finibus sed nisi in convallis sed dolor.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
      </div>
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
      <Container>
        <Row>
          {packages.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Places items={item} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
