import React, { useState } from 'react'
import Explore from '../Components/Explore'
import Experience from '../Components/Experience'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CustomerSay from '../Components/CustomerSay'
const AboutScreen = () => {
  const [first, setFirst] = useState(false)
  const offerHandler = () => {
    setFirst(true)
  }
  const provideHandler = () => {
    setFirst(false)
  }
  return (
    <>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Explore />
      <Row>&nbsp;</Row>
      <Experience />
      <div className='about-image'>
        <div className='overlay-all'>
          <Row>&nbsp;</Row>

          <Container>
            <Row>
              <Col>
                <p
                  className='py-4'
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '40px',
                  }}
                >
                  Why Choose Us
                </p>
              </Col>
            </Row>
            {first ? (
              <>
                <Button className='me-2 btn-hover' onClick={offerHandler}>
                  We Offer
                </Button>
                <Button
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    outline: 'none',
                    border: '1px solid black',
                  }}
                  onClick={provideHandler}
                >
                  We Provide
                </Button>
              </>
            ) : (
              <>
                <Button
                  className='me-2'
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    outline: 'none',
                    border: '1px solid black',
                  }}
                  onClick={offerHandler}
                >
                  We Offer
                </Button>
                <Button
                  variant='primary'
                  className='btn-hover'
                  onClick={provideHandler}
                >
                  We Provide
                </Button>
              </>
            )}

            <Row>&nbsp;</Row>
            <Row>&nbsp;</Row>

            {first ? (
              <Row>
                <Col sm={6} md={6} lg={4}>
                  <ul className='border-about'>
                    <li className='py-2'>
                      <center>
                        <i
                          class='fas fa-gift fa-3x fa-3x'
                          style={{
                            color: '#1da1f2',
                          }}
                        ></i>
                      </center>
                    </li>
                    <li>
                      <h2
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: '22px',
                        }}
                      >
                        Winter Tours
                      </h2>
                    </li>
                    <li>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontSize: '16px',
                        }}
                      >
                        Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                        lobortis mollis arcu, vel vulputate justo.
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={6} lg={4}>
                  <ul className='border-about'>
                    <li className='py-2'>
                      <center>
                        <i
                          class='fas fa-gift fa-3x fa-3x'
                          style={{
                            color: '#1da1f2',
                          }}
                        ></i>
                      </center>
                    </li>
                    <li>
                      <h2
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: '22px',
                        }}
                      >
                        Accomodation
                      </h2>
                    </li>
                    <li>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontSize: '16px',
                        }}
                      >
                        Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                        lobortis mollis arcu, vel vulputate justo.
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={6} lg={4}>
                  <ul className='border-about'>
                    <li className='py-2'>
                      <center>
                        <i
                          class='fas fa-gift fa-3x fa-3x'
                          style={{
                            color: '#1da1f2',
                          }}
                        ></i>
                      </center>
                    </li>
                    <li>
                      <h2
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: '22px',
                        }}
                      >
                        Low Prices
                      </h2>
                    </li>
                    <li>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontSize: '16px',
                        }}
                      >
                        Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                        lobortis mollis arcu, vel vulputate justo.
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col sm={6} md={6} lg={4}>
                  <ul className='border-about'>
                    <li className='py-2'>
                      <center>
                        <i
                          class='fas fa-gift fa-3x fa-3x'
                          style={{
                            color: '#1da1f2',
                          }}
                        ></i>
                      </center>
                    </li>
                    <li>
                      <h2
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: '22px',
                        }}
                      >
                        Less Crowd
                      </h2>
                    </li>
                    <li>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontSize: '16px',
                        }}
                      >
                        Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                        lobortis mollis arcu, vel vulputate justo.
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={6} lg={4}>
                  <ul className='border-about'>
                    <li className='py-2'>
                      <center>
                        <i
                          class='fas fa-gift fa-3x fa-3x'
                          style={{
                            color: '#1da1f2',
                          }}
                        ></i>
                      </center>
                    </li>
                    <li>
                      <h2
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: '22px',
                        }}
                      >
                        Exp Agents
                      </h2>
                    </li>
                    <li>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontSize: '16px',
                        }}
                      >
                        Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                        lobortis mollis arcu, vel vulputate justo.
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={6} lg={4}>
                  <ul className='border-about'>
                    <li className='py-2'>
                      <center>
                        <i
                          class='fas fa-gift fa-3x fa-3x'
                          style={{
                            color: '#1da1f2',
                          }}
                        ></i>
                      </center>
                    </li>
                    <li>
                      <h2
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: '22px',
                        }}
                      >
                        Easy Trip
                      </h2>
                    </li>
                    <li>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontSize: '16px',
                        }}
                      >
                        Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                        lobortis mollis arcu, vel vulputate justo.
                      </p>
                    </li>
                  </ul>
                </Col>
              </Row>
            )}
          </Container>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
        </div>
      </div>
      <CustomerSay />
      <Row>&nbsp;</Row>
    </>
  )
}

export default AboutScreen
