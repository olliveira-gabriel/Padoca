import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MaisPedido from '../img/mais-pedidos.png'
import CardsHome from './CardsHome';
function Favoristos() {
  return (
    <div>
      <Container>
        <Row>
            <Col>
            <img src={MaisPedido} alt="Banner da página inicial"  className="favoritos w-50" />
            </Col>
            <Col>
                <Row>
                    <Col><CardsHome/></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Favoristos
