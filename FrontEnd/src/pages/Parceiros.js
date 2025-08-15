import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner';
import '../App.css';
import '../index.css';
import './Parceiros.css';

// Importar imagens do banner
import BannerParceiros from '../img/Banner_Parceiros.png';

// Importar imagens do Coffee Break
import CoffeeBreak1 from '../img/Rectangle 40.png';
import CoffeeBreak2 from '../img/Rectangle 41.png';
import CoffeeBreak3 from '../img/Rectangle 42.png';
import CoffeeBreak4 from '../img/Rectangle 43.png';
import CoffeeBreak5 from '../img/Rectangle 44.png';
import CoffeeBreak6 from '../img/Rectangle 45.png';
import CoffeeBreak7 from '../img/Rectangle 46.png';
import CoffeeBreak8 from '../img/Rectangle 47.png';
import CoffeeBreak9 from '../img/Rectangle 48.png';


import Cliente1 from '../img/Rectangle 51.png';
import Cliente2 from '../img/Rectangle 52.png';
import Cliente3 from '../img/Rectangle 53.png';
import Cliente4 from '../img/Rectangle 54.png';
import Cliente5 from '../img/Rectangle 55.png';
import Cliente6 from '../img/Rectangle 56.png';
import Cliente7 from '../img/Rectangle 57.png';
import Cliente8 from '../img/Rectangle 58.png';

function Parceiros() {
  const coffeeBreakImages = [
    { src: CoffeeBreak1, alt: "Coffee Break 1" },
    { src: CoffeeBreak2, alt: "Coffee Break 2" },
    { src: CoffeeBreak3, alt: "Coffee Break 3" },
    { src: CoffeeBreak4, alt: "Coffee Break 4" },
    { src: CoffeeBreak5, alt: "Coffee Break 5" },
    { src: CoffeeBreak6, alt: "Coffee Break 6" },
    { src: CoffeeBreak7, alt: "Coffee Break 7" },
    { src: CoffeeBreak8, alt: "Coffee Break 8" },
    { src: CoffeeBreak9, alt: "Coffee Break 9" },
    { src: CoffeeBreak1, alt: "Coffee Break 1" },
    { src: CoffeeBreak2, alt: "Coffee Break 2" },
    { src: CoffeeBreak3, alt: "Coffee Break 3" }
  ];

  const clienteImages = [
    { src: Cliente1, alt: "Cliente 1" },
    { src: Cliente2, alt: "Cliente 2" },
    { src: Cliente3, alt: "Cliente 3" },
    { src: Cliente4, alt: "Cliente 4" },
    { src: Cliente5, alt: "Cliente 5" },
    { src: Cliente6, alt: "Cliente 6" },
    { src: Cliente7, alt: "Cliente 7" },
    { src: Cliente8, alt: "Cliente 8" }
  ];

  return (
    <div className="parceiros-page">
      <Banner Banner={BannerParceiros} TxtAlternativo="Banner Parceiros" />


      <Container className="my-5">
        <Row>
          <Col xs={12} className="text-center mb-4">
            <h2 className="coffee-break-title">Coffee Break</h2>
          </Col>
        </Row>
        <Row className="g-3">
          {coffeeBreakImages.map((image, index) => (
            <Col 
              key={index} 
              xs={6} 
              sm={4} 
              md={3} 
              lg={2} 
              xl={2}
              className="d-flex justify-content-center"
            >
              <div className="coffee-break-item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="img-fluid coffee-break-img"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5 pb-5">
        <Row bg-vermelho>
          <Col xs={12} className="text-center mb-4">
            <h2 className="clientes-title">Nossos clientes</h2>
          </Col>
        </Row>
        <Row className=" g-3 justify-content-center ">
          {clienteImages.map((cliente, index) => (
            <Col 
              key={index} 
              xs={6} 
              sm={4} 
              md={3} 
              lg={3} 
              xl={3}
              className="d-flex justify-content-center"
            >
              <div className="cliente-item">
                <img 
                  src={cliente.src} 
                  alt={cliente.alt} 
                  className="img-fluid cliente-img"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Parceiros;

