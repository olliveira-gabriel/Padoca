import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CardsCardapio({ ImgProduto, TituloProduto, PrecoProduto, id }) {
  const { addToCart } = useContext(CartContext);

  const produto = {
    id,
    name: TituloProduto,
    price: PrecoProduto,
    image: ImgProduto,
  };

  return (
    <Card className='card-home' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImgProduto} />
      <Card.Body>
        <Card.Title className='Text-Card'>{TituloProduto}</Card.Title>
        <Card.Text className='Text-preco'>R$ {PrecoProduto.toFixed(2)}</Card.Text>
        <button
          className='btn-add-carrinho'
          onClick={() => addToCart(produto)}
        >
          Adicionar ao carrinho <i className="bi bi-cart fs-4 text-warning"></i>
        </button>
      </Card.Body>
    </Card>
  );
}

export default CardsCardapio;