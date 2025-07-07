import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

function AvaliacaoCard({ nome, texto }) {
  return (
    <Card className="avaliacao-card">
      <Card.Body className="text-center">
        <div className="avatar" />
        <Card.Title className="mt-2">{nome}</Card.Title>
        <div className="estrelas mb-3">★★★★★</div>
        <Card.Text className='Texto-avaliacao'>{texto}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function CarrosselAvaliacao() {
  return (
    <div className="carrossel-container">
      <Carousel indicators={false}>
        <Carousel.Item>
          <Container>
            <Row className="justify-content-center">
              <Col md={5}>
                <AvaliacaoCard nome="Gabriel" texto="Amei a padaria! Atendimento maravilhoso!" />
              </Col>
              <Col md={5}>
                <AvaliacaoCard nome="Maria" texto="Melhor pão de queijo que já comi!" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container>
            <Row className="justify-content-center">
              <Col md={5}>
                <AvaliacaoCard nome="Jefferson" texto="Amei a padaria! Atendimento maravilhoso!" />
              </Col>
              <Col md={5}>
                <AvaliacaoCard nome="laiany" texto="Melhor pão de queijo que já comi!" />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrosselAvaliacao;
