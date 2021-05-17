import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col sm={12} lg={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
