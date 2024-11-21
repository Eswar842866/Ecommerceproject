import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
   
    
    
      return (
        <>
         
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <LinkContainer to="/">
              <Navbar.Brand >Googleshop</Navbar.Brand>
              </LinkContainer>
              <Nav className="mg-auto">
                <LinkContainer to="/cart">
                <Nav.Link>
                  <i className='fas fa-shopping-cart' ></i>cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                <Nav.Link > 
                  <i className='fas fa-user' ></i>Login
                  </Nav.Link>
                </LinkContainer>
               
              </Nav>
            </Container>
          </Navbar>
    
         
        </>
      );
    }
    
 


export default Header
