import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoCabecalho from  "../img/logo led.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Navbar className='cabecalho'>
        <Container className='container'>
          <Navbar.Brand href="#home">
            <Link to='/'><img className='Logo' src={LogoCabecalho} alt='Logo Padaria'/></Link>
          </Navbar.Brand>
          <div className='links'>
            <Nav.Link className='menu'><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link className='menu'><Link to='/'>Cardápio</Link></Nav.Link>
            <Nav.Link className='menu'><Link to='/'>Unidade</Link></Nav.Link>
          </div>
          <Nav className="me-auto">
          <Nav.Link className='menu'><Link to='/'><i class="bi bi-cart fs-1 "></i></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu
