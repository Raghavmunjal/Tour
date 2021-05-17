import React, { useState } from 'react'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import { saveBookingDetails } from '../actions/bookaction'
import { useDispatch, useSelector } from 'react-redux'
import about from '../images/about.jpg'

const BookingScreen = ({ history }) => {
  const bookInfo = useSelector((state) => state.book)
  const { bookingDetails } = bookInfo
  const dispatch = useDispatch()
  const [name, SetName] = useState(
    bookingDetails.name ? bookingDetails.name : ''
  )
  const [email, SetEmail] = useState(
    bookingDetails.email ? bookingDetails.email : ''
  )
  const [mobile, SetMobile] = useState(
    bookingDetails.mobile ? bookingDetails.mobile : ''
  )
  const [date, SetDate] = useState(
    bookingDetails.date ? bookingDetails.date : ''
  )
  const [adults, SetAdults] = useState(
    bookingDetails.adults ? bookingDetails.adults : ''
  )
  const [kids, SetKids] = useState(
    bookingDetails.kids ? bookingDetails.kids : ''
  )
  const [msg, SetMsg] = useState(bookingDetails.msg ? bookingDetails.msg : '')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveBookingDetails({ name, email, mobile, date, adults, kids, msg })
    )
    history.push('/')
  }

  return (
    <>
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
                Book Your Tour
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>&nbsp;</Row>
      <div>
        <Container>
          <Row>
            <Col sm={12} lg={6}>
              <Form className='book-form' onSubmit={submitHandler}>
                <Form.Group as={Row}>
                  <Col sm={6} className='mb-3'>
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
                  <Col sm={6} className='mb-3'>
                    <Form.Control
                      type='email'
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
                  <Col sm={6} className='mb-3'>
                    <Form.Control
                      type='text'
                      placeholder='Mobile No.'
                      value={mobile}
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
                      onChange={(e) => SetMobile(e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className='mb-3'>
                    <Form.Control
                      type='text'
                      value={date}
                      placeholder='Date'
                      required
                      style={{
                        fontSize: '15px',
                        padding: '1em 1em',
                        color: 'gray',
                        backgroundColor: 'whiteSmoke',
                        outline: 'none',
                        border: 'none',
                        letterSpacing: '1px',
                        borderRadius: '0px',
                      }}
                      onChange={(e) => SetDate(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={6} className='mb-3'>
                    <Form.Control
                      type='number'
                      placeholder='Adults'
                      value={adults}
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
                      onChange={(e) => SetAdults(e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className='mb-3'>
                    <Form.Control
                      type='number'
                      placeholder='Kids'
                      value={kids}
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
                      onChange={(e) => SetKids(e.target.value)}
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
                    Book Now
                  </Button>
                </center>
              </Form>
            </Col>
            <Col sm={12} lg={6} className='booking-img px-4'>
              <img
                src={about}
                alt=''
                className='mb-4'
                style={{ height: '200px', width: '400px' }}
              />
              <h5
                className='mb-3'
                style={{
                  color: 'black',
                  fontSize: '25px',
                }}
              >
                Tour Description
              </h5>
              <span
                style={{
                  fontSize: '17px',
                }}
                className='text-muted mb-2'
              >
                Duis nisi sapien, elementum finibus ferme ntum ed <br /> eget,
                aliquet et leo. Mauris hendrerit vel ex. vitae <br /> luctus
                massa. Phas ellus sed aliquam leo et dolor. <br /> Vestibulum
                ullamcorper massa eut sed fringilla.
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

export default BookingScreen
