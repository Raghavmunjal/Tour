import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
const ContactUs = () => {
  return (
    <>
      <Row>&nbsp;</Row>

      <div>
        <Container>
          <Row>
            <Col>
              <p
                className='py-5'
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: '40px',
                }}
              >
                Get In Touch With Us
              </p>
            </Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col sm={6} md={6} lg={4}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='fas fa-map-marker-alt fa-3x'
                      style={{
                        color: '#1da1f2',
                        backgroundColor: 'white',
                      }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    className='py-2'
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '22px',
                    }}
                  >
                    Location
                  </h5>
                </li>
                <li>
                  <p
                    style={{
                      textAlign: 'center',
                      color: 'gray',
                      fontSize: '16px',
                    }}
                  >
                    The company name <br /> Addison Township, IL, USA.
                  </p>
                </li>
              </ul>
            </Col>
            <Col sm={6} md={6} lg={4}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='far fa-envelope-open fa-3x'
                      style={{
                        color: '#1da1f2',
                        backgroundColor: 'white',
                      }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    className='py-2'
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '22px',
                    }}
                  >
                    Phone & Email
                  </h5>
                </li>
                <li>
                  <p
                    style={{
                      textAlign: 'center',
                      color: 'gray',
                      fontSize: '16px',
                    }}
                  >
                    +(122) 123 456 7890 <br /> info@examplemail.com
                  </p>
                </li>
              </ul>
            </Col>
            <Col sm={6} md={6} lg={4}>
              <ul>
                <li className='py-2'>
                  <center>
                    <i
                      class='far fa-comments fa-3x'
                      style={{
                        color: '#1da1f2',
                        backgroundColor: 'white',
                      }}
                    ></i>
                  </center>
                </li>
                <li>
                  <h5
                    className='py-2'
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '22px',
                    }}
                  >
                    Stay In Touch
                  </h5>
                </li>
                <li className=''>
                  <center>
                    <i
                      class='fab fa-facebook-f px-2 py-2 me-2'
                      style={{ color: '#fff', backgroundColor: '#3b5998' }}
                    ></i>
                    <i
                      class='fab fa-twitter px-2 py-2 me-2'
                      style={{ color: '#fff', backgroundColor: '#1da1f2' }}
                    ></i>
                    <i
                      class='fab fa-google-plus-g px-2 py-2 me-2'
                      style={{ color: '#fff', backgroundColor: '#dd4b39' }}
                    ></i>

                    <i
                      class='fab fa-linkedin-in px-2 py-2 me-2'
                      style={{ color: '#fff', backgroundColor: '#0077b5' }}
                    ></i>
                  </center>
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

export default ContactUs
