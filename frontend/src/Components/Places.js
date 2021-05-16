import React from 'react'
import { Card } from 'react-bootstrap'
const Places = ({ items }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded' style={{ border: 'none' }}>
        <Card.Img src={items.img} variant='top' style={{ height: '250px' }} />

        <Card.Body>
          <Card.Title as='div'>
            <strong>{items.country}</strong>
          </Card.Title>
          <Card.Text as='h6'>{items.title}</Card.Text>
          <Card.Text as='p'>{items.desc}</Card.Text>
          <Card.Text as='span'>Duration : {items.days}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Places
