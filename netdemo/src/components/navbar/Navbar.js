import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


export default function Navbarjs(props){
    return( 
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Movies</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favList">FavList</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
    
}