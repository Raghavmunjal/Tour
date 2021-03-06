import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <>
      <header>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Brand href='/'>
              <i class='fas fa-umbrella-beach'></i>&nbsp;Grand Tour
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/' className='px-3'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about' className='px-3'>
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/services' className='px-3'>
                  <Nav.Link>Services</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/package' className='px-3'>
                  <Nav.Link>Packages</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact' className='px-3'>
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/book' className='px-3'>
                  <Button style={{ backgroundColor: 'rgb(66, 133, 244)' }}>
                    Book Now
                  </Button>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
