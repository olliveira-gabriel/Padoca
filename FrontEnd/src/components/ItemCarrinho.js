// src/components/ItemCarrinho.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Row, Col, Image, Button } from "react-bootstrap";
import "./ItemCarrinho.css";

function ItemCarrinho({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="item-carrinho-row">
      <Row className="align-items-center">
        <Col xs={2}>
          <div className="item-image-container">
            <Image src={item.image}  alt={item.name} className="item-image-small" fluid />
          </div>
        </Col>
        <Col xs={6}>
          <div className="item-details-simple">
            <div className="item-name-simple">{item.name}</div>
            <div className="item-quantity-controls">
              <Button 
                variant="outline-secondary" 
                size="sm" 
                className="quantity-btn"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </Button>
              <span className="quantity-display">{item.quantity}</span>
              <Button 
                variant="outline-secondary" 
                size="sm" 
                className="quantity-btn"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={3} className="text-end">
          <div className="item-price-simple">
            R$ {(item.price * item.quantity).toFixed(2)}
          </div>
        </Col>
        <Col xs={1} className="text-end">
          <button 
            className="remove-button-simple"
            onClick={() => removeFromCart(item.id)}
            title="Remover item"
          >
            🗑️
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default ItemCarrinho;

