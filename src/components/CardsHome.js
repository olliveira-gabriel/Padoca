import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardsHome(props) {
    return (
        <Card className='card-home' style={{ width: '15rem' }}>
          <Card.Img variant="top" src={props.ImgProduto} />
          <Card.Body>
            <Card.Title>{props.TituloProduto}</Card.Title>
            <Card.Text>
              {props.PrecoProduto}
            </Card.Text>
            <button className='btn-add-carrinho' variant="primary">Adicionar ao carrinho <i className="bi bi-cart fs-4 text-warning"></i></button>
          </Card.Body>
        </Card>
      );
}

export default CardsHome