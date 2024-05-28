// import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const TopNav = () => {
  return (
    <Navbar fixed="top" bg="white" expand="lg" className='border rounded-pill mt-3 w-75 mx-auto' id='nav'>
      <Container>
        <Navbar.Brand href="#home"><span id='brandStyle'>RM</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fs-4" href="#home">Home</Nav.Link>
            <Nav.Link className="fs-4" href="#projects">Projects</Nav.Link>
            <Nav.Link className="fs-4" href="#skills">Skills</Nav.Link>
            <Nav.Link className="fs-4" href="#interests">Interests</Nav.Link>
            <Nav.Link className="fs-4" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav