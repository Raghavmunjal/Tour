import React, { useState } from 'react'
import ContactUs from '../Components/ContactUs'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'
const ContactScreen = () => {
  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [phone, SetPhone] = useState('')
  const [msg, SetMsg] = useState('')
  return (
    <>
      <ContactUs />
      <div>
        <Container>
          <Row>
            <Col sm={12} lg={6}>
              <Form className='book-form'>
                <Form.Group as={Row}>
                  <Col sm={12} className='mb-3'>
                    <Form.Control
                      type='text'
                      placeholder='Name'
                      value={name}
                      required
                      style={{
                        fontSize: '15px',
                        color: 'gray',
                        padding: '1em 1em',
                        backgroundColor: 'whiteSmoke',
                        outline: 'none',
                        border: 'none',
                        letterSpacing: '1px',
                        borderRadius: '0px',
                      }}
                      onChange={(e) => SetName(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={12} className='mb-3'>
                    <Form.Control
                      type='text'
                      placeholder='Email'
                      value={email}
                      required
                      style={{
                        fontSize: '15px',
                        color: 'gray',
                        padding: '1em 1em',
                        backgroundColor: 'whiteSmoke',
                        outline: 'none',
                        border: 'none',
                        letterSpacing: '1px',
                        borderRadius: '0px',
                      }}
                      onChange={(e) => SetEmail(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={12} className='mb-3'>
                    <Form.Control
                      type='text'
                      placeholder='Mobile No.'
                      value={phone}
                      required
                      style={{
                        fontSize: '15px',
                        color: 'gray',
                        padding: '1em 1em',
                        backgroundColor: 'whiteSmoke',
                        outline: 'none',
                        border: 'none',
                        letterSpacing: '1px',
                        borderRadius: '0px',
                      }}
                      onChange={(e) => SetPhone(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={12} className='mb-3'>
                    <Form.Control
                      type='textarea'
                      size='lg'
                      placeholder='Message'
                      value={msg}
                      required
                      style={{
                        fontSize: '15px',
                        color: 'gray',
                        padding: '1em 1em',
                        backgroundColor: 'whiteSmoke',
                        outline: 'none',
                        border: 'none',
                        letterSpacing: '1px',
                        borderRadius: '0px',
                      }}
                      onChange={(e) => SetMsg(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <center>
                  <Button
                    type='submit'
                    variant='primary'
                    style={{
                      fontSize: '16px',
                      textDecoration: 'none',

                      padding: '10px 20px',

                      outline: 'none',
                      border: 'none',
                      letterSpacing: '2px',
                      borderRadius: '0px',
                    }}
                  >
                    Send FeedBack
                  </Button>
                </center>
              </Form>
            </Col>
            <Col sm={12} lg={6} className='booking-img px-4'>
              <p
                className='mb-4'
                style={{
                  color: 'black',
                  fontSize: '35px',
                }}
              >
                Do You Have Any Questions About Us? Write To Us.
              </p>
              <span
                style={{
                  fontSize: '16px',
                }}
                className='text-muted mb-4'
              >
                Duis nisi sapien, elementum finibus ferme ntum ed <br /> eget,
                aliquet et leo. Mauris hendrerit vel ex. vitae <br /> luctus
                massa. Phas ellus sed aliquam leo et dolor. <br /> Vestibulum
                ullamcorper massa eut sed fringilla.
              </span>
              <p
                className='mt-4 mb-3'
                style={{
                  color: 'black',
                  fontSize: '25px',
                }}
              >
                Office Hours
              </p>
              <span
                style={{
                  fontSize: '17px',
                }}
                className='text-muted mb-2'
              >
                Monday to Friday : 09 am to 06 pm <br /> Saturday and Sunay : 10
                am to 04 pm
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
    </>
  )
}

export default ContactScreen
