import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CardsHome(props) {
    const { addToCart } = useContext(CartContext);

    const product = {
        id: props.TituloProduto, // Usando o título como ID temporário
        name: props.TituloProduto,
        price: parseFloat(props.PrecoProduto.replace('R$', '').replace(',', '.')), // Convertendo preço para número
        image: props.ImgProduto
    };

    return (
        <Card className='card-home' style={{ width: '15rem' }}>
          <Card.Img variant="top" src={props.ImgProduto} />
          <Card.Body>
            <Card.Title className='Text-Card'>{props.TituloProduto}</Card.Title>
            <Card.Text className='Text-preco'>
              {props.PrecoProduto}
            </Card.Text>
            <button className='btn-add-carrinho' variant="primary" onClick={() => addToCart(product)}>Adicionar ao carrinho <i className="bi bi-cart fs-4 text-warning"></i></button>
          </Card.Body>
        </Card>
      );
}

export default CardsHome

