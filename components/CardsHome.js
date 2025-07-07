import Card from 'react-bootstrap/Card';


function CardsHome(props) {
    return (
        <Card className='card-home' style={{ width: '15rem' }}>
          <Card.Img variant="top" src={props.ImgProduto} />
          <Card.Body>
            <Card.Title className='Text-Card'>{props.TituloProduto}</Card.Title>
            <Card.Text className='Text-preco'>
              {props.PrecoProduto}
            </Card.Text>
            <button className='btn-add-carrinho' variant="primary">Adicionar ao carrinho <i className="bi bi-cart fs-4 text-warning"></i></button>
          </Card.Body>
        </Card>
      );
}

export default CardsHome