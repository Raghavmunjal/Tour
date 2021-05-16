import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const PlanTrip = () => {
  return (
    <>
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
                <li className='py-2'>
                  <center>
                    <i
                      class='fas fa-map-signs fa-3x'
                      style={{
                        color: '#1da1f2',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '20px solid white',
                      }}
                    ></i>
                  </center>
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
                <li className='py-2'>
                  <center>
                    <i
                      class='far fa-calendar-alt fa-3x'
                      style={{
                        color: '#1da1f2',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '20px solid white',
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
                <li className='py-2'>
                  <center>
                    <i
                      class='fas fa-gift fa-3x'
                      style={{
                        color: '#1da1f2',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '20px solid white',
                      }}
                    ></i>
                  </center>
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
    </>
  )
}

export default PlanTrip
