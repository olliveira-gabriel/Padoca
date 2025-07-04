import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MaisPedido from '../img/mais-pedidos.png'
import CardsHome from './CardsHome';
import ImgPaoQueijo from '../img/MiniPaoQ.png';
import ImgSanduba from '../img/Sanduba.png'
import ImgBolo from '../img/Bolo.png'


function Favoristos() {
  return (
    <div>
      <Container>
        <Row>
            <Col md={4} className="d-none d-md-block text-center">
            <img src={MaisPedido} alt="Banner da página inicial"  className="favoritos w-3" />
            </Col>
            <Col>
                <Row>
                    <Col xs={12} md={6} lg={4}><CardsHome ImgProduto={ImgPaoQueijo} TituloProduto="Mini Pão de Queijo com Requeijão" PrecoProduto="R$20" /></Col>
                    <Col xs={12} md={6} lg={4}><CardsHome ImgProduto={ImgSanduba} TituloProduto="Sanduba queijo e presunto" PrecoProduto="R$17" /></Col>
                    <Col xs={12} md={6} lg={4}><CardsHome ImgProduto={ImgBolo} TituloProduto="Bolo de chocolate branco" PrecoProduto="R$25" /></Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Favoristos
