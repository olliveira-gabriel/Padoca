import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoCabecalho from  "../img/logo led.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar expand="lg" className="cabecalho px-3">
      <Container>
        <Navbar.Brand>
          <Link to='/'><img className='Logo' src={LogoCabecalho} alt='Logo Padaria'/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-navbar" />
        <Navbar.Collapse id="menu-navbar">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link className="menu-link" as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className="menu-link" as={Link} to='/cardapio'>Cardápio</Nav.Link>
            <Nav.Link className="menu-link" as={Link} to='/unidades'>Unidades</Nav.Link>
            <Nav.Link className="menu-link" as={Link} to='/carrinho'>
              <i className="bi bi-cart fs-3 text-warning"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu
