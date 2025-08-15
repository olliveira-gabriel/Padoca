import Banner from '../components/Banner.js'
import BannerCarapio from '../img/banner carapio.png'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsCardapio from '../components/CardsCardapio.js';
import ImgPaoQueijo from '../img/MiniPaoQ.png';
import ImgSanduba from '../img/Sanduba.png'
import ImgBolo from '../img/Bolo.png'
import ImgCoxinha from '../img/Coxinha.png'
import ImgPco from '../img/PaoComOvo.png'
import ImgOvo from '../img/Ovomexido.png'

function Cardapio() {
  const produtos = [
    {
      id: 1,
      nome: "Bolo de Chocolate Branco",
      preco: 25,
      imagem: ImgBolo,
    },
    {
      id: 2,
      nome: "Mini Pão de Queijo com Requeijão",
      preco: 20,
      imagem: ImgPaoQueijo,
    },
    {
      id: 3,
      nome: "Sanduba Queijo e Presunto",
      preco: 17,
      imagem: ImgSanduba,
    },
    {
      id: 4,
      nome: "Coxinha com Frango com Requeijão",
      preco: 16,
      imagem: ImgCoxinha,
    },
    {
      id: 5,
      nome: "Pão com Ovo e Peito de Peru",
      preco: 25,
      imagem: ImgPco,
    },
    {
      id: 6,
      nome: "Ovos Mexidos Com Queijo Prato e Requeijão",
      preco: 29,
      imagem: ImgOvo,
    },
  ];

  return (
    <div>
      <Banner Banner={BannerCarapio} />
      <Container>
        <Row className='linha-cards'>
          {produtos.slice(0, 3).map(produto => (
            <Col key={produto.id} xs={12} md={6} lg={4}>
              <CardsCardapio
                id={produto.id}
                TituloProduto={produto.nome}
                PrecoProduto={produto.preco}
                ImgProduto={produto.imagem}
              />
            </Col>
          ))}
        </Row>
        <Row className='linha-cards'>
          {produtos.slice(3).map(produto => (
            <Col key={produto.id} xs={12} md={6} lg={4}>
              <CardsCardapio
                id={produto.id}
                TituloProduto={produto.nome}
                PrecoProduto={produto.preco}
                ImgProduto={produto.imagem}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cardapio;
