import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import customer from '../data/customer'
const CustomerSay = () => {
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
                What Our Customers Say
              </p>
            </Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            {customer.map((item) => {
              return (
                <Col sm={6} md={6} lg={4} key={item._id}>
                  <ul>
                    <li className='py-2'>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'gray',
                          fontSize: '14px',
                          fontWeight: '100px',
                        }}
                      >
                        "Sed ut perspiciatis unde omnis ist natus <br /> error
                        sit volup tatem acu antium dolor tium <br /> sed e ullam
                        dolor amet.
                      </p>
                    </li>
                    <li>
                      <center>
                        <img
                          src={item.imag}
                          alt=''
                          style={{
                            height: '100px',
                            width: '100px',
                            borderRadius: '50%',
                          }}
                        />
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
                        {item.name}
                      </h5>
                    </li>
                  </ul>
                </Col>
              )
            })}
          </Row>
          <Row>&nbsp;</Row>
        </Container>
      </div>
    </>
  )
}

export default CustomerSay
