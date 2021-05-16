import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Experience = () => {
  return (
    <>
      <Container>
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
    </>
  )
}

export default Experience
