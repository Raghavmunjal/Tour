import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ backgroundColor: 'black' }}>
          <Container>
            <Row>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ul style={{ marginTop: '30px' }}>
                  <li>
                    <h6
                      style={{
                        color: 'white',
                        fontSize: '22px',
                        fontFamily: 'monospace',
                      }}
                    >
                      Address
                    </h6>
                  </li>
                  <li>
                    Location : 1234 lock, Charlotte,
                    <br />
                    North Carolina, United States
                  </li>
                  <li>Phone : +12 534894364</li>
                  <li>Email : info@example.com</li>
                  <li>Fax : +12 534894364</li>
                </ul>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ul style={{ marginTop: '30px' }}>
                  <li>
                    <h6
                      style={{
                        color: 'white',
                        fontSize: '22px',
                        fontFamily: 'monospace',
                      }}
                    >
                      About Us
                    </h6>
                  </li>
                  <li>
                    Vivamus magna justo, laci niats <br />
                    eget consectetur sed, conval lis <br />
                    at tellus. Nulla quis lorem ipnt
                    <br />
                    libero. Lorem ipsum dolor.
                  </li>
                  <li className='py-3'>
                    <i class='fab fa-facebook-square fa-2x px-1'></i>
                    <i class='fab fa-linkedin fa-2x px-1'></i>
                    <i class='fab fa-google-plus-square fa-2x px-1'></i>
                    <i class='fab fa-twitter-square fa-2x px-1'></i>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ul style={{ marginTop: '30px' }}>
                  <li>
                    <h6
                      style={{
                        color: 'white',
                        fontSize: '22px',
                        fontFamily: 'monospace',
                      }}
                    >
                      Travel Places
                    </h6>
                  </li>
                  <li>
                    <span>New Zealand</span>
                    <span className='px-5'>Spain</span>
                  </li>
                  <li>
                    <span> Paris , France</span>
                    <span className='px-5'>Turkey</span>
                  </li>
                  <li>
                    <span>LostAngelos</span>
                    <span className='px-5'> Europe</span>
                  </li>
                  <li>
                    <span>Darlington</span>
                    <span className='px-5'> &nbsp;&nbsp;India</span>
                  </li>
                  <li>
                    <span>Germany</span>
                    <span className='px-5'>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Australia
                    </span>
                  </li>
                  <li>South Africa </li>
                </ul>
              </Col>
              <Col sm={12} md={6} lg={4} xl={3}>
                <ul style={{ marginTop: '30px' }}>
                  <li>
                    <h6
                      style={{
                        color: 'white',
                        fontSize: '22px',
                        fontFamily: 'monospace',
                      }}
                    >
                      Newsletter
                    </h6>
                  </li>
                  <li>
                    By subscribing to our mailing list <br /> you will always
                    get latest news <br />
                    and updates from us.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>&nbsp;</Row>
            <Row>
              <Col></Col>
              <Col>
                <span style={{ color: 'gray' }}>
                  &copy; {new Date().getFullYear()} Grand Tour | All Rights
                  Reserved
                </span>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
