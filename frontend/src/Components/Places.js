import React from 'react'
import { Card } from 'react-bootstrap'
const Places = ({ items }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded' style={{ border: 'none' }}>
        <Card.Img
          className='imagee'
          src={items.img}
          variant='top'
          style={{ height: '250px', border: 'none' }}
        />

        <Card.Body style={{ backgroundColor: 'whitesmoke' }}>
          <Card.Title as='div' className='text-muted'>
            <i class='fas fa-map-marker-alt' style={{ color: '#1da1f2' }}></i>
            &nbsp;{items.country}
          </Card.Title>
          <Card.Text as='h5'>{items.title}</Card.Text>
          <Card.Text as='p' className='text-muted'>
            {items.desc}
          </Card.Text>
          <Card.Text as='span'>
            <i class='far fa-clock' style={{ color: '#1da1f2' }}></i>
            &nbsp;Duration : {items.days} days
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Places
