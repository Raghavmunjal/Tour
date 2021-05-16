import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import te1 from '../images/te4.jpg'
import te2 from '../images/p6.jpg'

const Service = () => {
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
                Our Services
              </p>
            </Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>

          <Row>
            <Col sm={8} md={6} lg={3}>
              <img src={te1} alt='' style={{ height: '180px' }} />
            </Col>

            <Col sm={8} md={6} lg={3}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='fas fa-building fa-2x'
                      style={{ color: '#1da1f2' }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '20px',
                    }}
                  >
                    ACCOMDATION
                  </h5>
                </li>
                <li>
                  <center>
                    <p
                      className='text-muted'
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      Duis nisi sapien, elementum et finibus et fermen eget,
                      aliquet etleo. Mauris vel ex.
                    </p>
                  </center>
                </li>
              </ul>
            </Col>

            <Col sm={8} md={6} lg={3}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='fab fa-free-code-camp fa-2x'
                      style={{ color: '#1da1f2' }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '20px',
                    }}
                  >
                    WINTER TOURS
                  </h5>
                </li>
                <li>
                  <center>
                    <p
                      className='text-muted'
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      Duis nisi sapien, elementum et finibus et fermen eget,
                      aliquet etleo. Mauris vel ex.
                    </p>
                  </center>
                </li>
              </ul>
            </Col>

            <Col sm={8} md={6} lg={3}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='fas fa-users fa-2x'
                      style={{ color: '#1da1f2' }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '20px',
                    }}
                  >
                    EXP AGENTS
                  </h5>
                </li>
                <li>
                  <center>
                    <p
                      className='text-muted'
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      Duis nisi sapien, elementum et finibus et fermen eget,
                      aliquet etleo. Mauris vel ex.
                    </p>
                  </center>
                </li>
              </ul>
            </Col>
          </Row>

          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>

          <Row>
            <Col sm={8} md={6} lg={3}>
              <img src={te2} alt='' style={{ height: '180px' }} />
            </Col>

            <Col sm={8} md={6} lg={3}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='far fa-money-bill-alt fa-2x'
                      style={{ color: '#1da1f2' }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '20px',
                    }}
                  >
                    LOW PRICES
                  </h5>
                </li>
                <li>
                  <center>
                    <p
                      className='text-muted'
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      Duis nisi sapien, elementum et finibus et fermen eget,
                      aliquet etleo. Mauris vel ex.
                    </p>
                  </center>
                </li>
              </ul>
            </Col>

            <Col sm={8} md={6} lg={3}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='fas fa-binoculars fa-2x'
                      style={{ color: '#1da1f2' }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '20px',
                    }}
                  >
                    EASY BOOKING
                  </h5>
                </li>
                <li>
                  <center>
                    <p
                      className='text-muted'
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      Duis nisi sapien, elementum et finibus et fermen eget,
                      aliquet etleo. Mauris vel ex.
                    </p>
                  </center>
                </li>
              </ul>
            </Col>
            <Col sm={8} md={6} lg={3}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='fas fa-camera fa-2x'
                      style={{ color: '#1da1f2' }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '20px',
                    }}
                  >
                    BEST PACKAGES
                  </h5>
                </li>
                <li>
                  <center>
                    <p
                      className='text-muted'
                      style={{
                        fontSize: '13px',
                      }}
                    >
                      Duis nisi sapien, elementum et finibus et fermen eget,
                      aliquet etleo. Mauris vel ex.
                    </p>
                  </center>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
