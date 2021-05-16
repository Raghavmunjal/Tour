import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import p5 from '../images/p5.jpg'
const Explore = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <h4 className='mb-5 mt-4'>
              We Will Take You To The Top Destination In The World,{' '}
              <strong>Explore With Us!</strong>
            </h4>
            <p className='mb-5'>
              Duis nisi sapien, elementum finibus fermentum eget, aliquet leo
              et. Mauris hendrerit vel ex. Quisque vitae luctus massa. Phasellus
              sed aliquam leo. Vestibulum ullamcorper a massa eu fringilla.
              Integer ultrices finibus sed nisi. in convallis felis dapibus sit
              amet.
            </p>
            <p className='mb-5'>
              Donec a arcu et sapien hendrerit accumsan. Pellentesque sit amet
              eros iac, elementum urna ipsum accumsan, iaculis ligula. Aenean
              quam eget maximus in convallis felis dapibus sit amet.
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <img
              src={p5}
              className='imagee'
              alt='p5'
              style={{ height: '420px', width: '500px' }}
            />
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
      </Container>
    </>
  )
}

export default Explore
