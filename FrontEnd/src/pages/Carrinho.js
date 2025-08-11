import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCarrinho from "../components/ItemCarrinho.js";
import FormularioEndereco from "../components/FormularioEndereco.js";
import { Container, Row, Col } from "react-bootstrap";
import "./Carrinho.css";

function Carrinho() {
  const { cart } = useContext(CartContext);
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container fluid className="carrinho-container">
      <Row className="justify-content-center">
        <Col lg={10} md={12} sm={12}>
          <div className="carrinho-content">
            <h2 className="carrinho-title">Meu Carrinho</h2>
            
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Seu carrinho está vazio</p>
                <p>Adicione alguns produtos deliciosos do nosso cardápio!</p>
              </div>
            ) : (
              <Row>
                <Col lg={6} md={12} className="produtos-section">
                  <h3 className="produtos-title">Produtos</h3>
                  <div className="produtos-list">
                    {cart.map((item) => (
                      <ItemCarrinho key={item.id} item={item} />
                    ))}
                  </div>
                  
                  <div className="total-section">
                    <div className="total-line">
                      <span className="total-label">Total</span>
                      <span className="total-value">R$ {total.toFixed(2)}</span>
                    </div>
                  </div>
                </Col>
                
                <Col lg={1} md={12} className="divisor-section">
                  <div className="divisor-vertical"></div>
                </Col>
                
                <Col lg={5} md={12} className="endereco-section">
                  <FormularioEndereco />
                </Col>
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Carrinho;

