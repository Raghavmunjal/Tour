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
                  <li className='py-3 px-1'>
                    <i
                      class='fab fa-facebook-f  px-2 py-2 me-2'
                      style={{ color: '#fff', backgroundColor: '#3b5998' }}
                    ></i>
                    <i
                      class='fab fa-twitter  px-2 py-2  me-2'
                      style={{ color: '#fff', backgroundColor: '#1da1f2' }}
                    ></i>
                    <i
                      class='fab fa-google-plus-g px-2 py-2  me-2'
                      style={{ color: '#fff', backgroundColor: '#dd4b39' }}
                    ></i>

                    <i
                      class='fab fa-linkedin-in px-2 py-2  me-2'
                      style={{ color: '#fff', backgroundColor: '#0077b5' }}
                    ></i>
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
                    <span className='px-5'> &nbsp;&nbsp;&nbsp;India</span>
                  </li>
                  <li>
                    <span>Germany</span>
                    <span className='px-5'>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Australia
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
                  <li className='py-4'>
                    <input
                      type='email'
                      style={{
                        backgroundColor: 'transparent',
                        height: '40px',
                        width: '200px',
                        color: 'white',
                        border: '0.4px solid whitesmoke',
                      }}
                      placeholder=' Enter Your Email...'
                    />
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>&nbsp;</Row>
            <Row>
              <Col>
                <center>
                  <span style={{ color: 'gray' }}>
                    &copy; {new Date().getFullYear()} Grand Tour | All Rights
                    Reserved
                  </span>
                </center>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
