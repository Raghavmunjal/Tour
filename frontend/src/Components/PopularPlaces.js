import React from 'react'
import { Card } from 'react-bootstrap'
const PopularPlaces = ({ items }) => {
  return (
    <>
      <center>
        <h6 style={{ fontSize: '25px' }}>{items.place}</h6>
      </center>
      <Card className='my-3 p-3 rounded' style={{ border: 'none' }}>
        <Card.Img
          className='imagee'
          src={items.imag}
          variant='top'
          style={{ height: '300px', border: 'none' }}
        />
      </Card>
    </>
  )
}

export default PopularPlaces
