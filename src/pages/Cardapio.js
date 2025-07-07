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
  return (
    <div>
        <Banner Banner={BannerCarapio} />
        <Container>
          <Row className='linha-cards' >
            <Col  xs={12} md={6} lg={4} ><CardsCardapio ImgProduto={ImgBolo} TituloProduto="Bolo de Chocolate Branco" PrecoProduto="R$25" /></Col>
            <Col xs={12} md={6} lg={4}><CardsCardapio ImgProduto={ImgPaoQueijo} TituloProduto="Mini Pão de Queijo com Requeijão" PrecoProduto="R$20"/></Col>
            <Col  xs={12} md={6} lg={4}><CardsCardapio ImgProduto={ImgSanduba} TituloProduto="Sanduba Queijo e Presunto" PrecoProduto="R$17" /></Col>
          </Row>
          <Row className='linha-cards'>
            <Col  xs={12} md={6} lg={4}><CardsCardapio ImgProduto={ImgCoxinha} TituloProduto="Coxinha com Frango com Requeijão" PrecoProduto="R$16" /></Col>
            <Col  xs={12} md={6} lg={4}><CardsCardapio ImgProduto={ImgPco} TituloProduto="Pão com Ovo e Peito de Peru" PrecoProduto="R$25" /></Col>
            <Col  xs={12} md={6} lg={4}><CardsCardapio ImgProduto={ImgOvo} TituloProduto="Ovos Mexidos Com Queijo Prato e Requeijão" PrecoProduto="R$29" /></Col>
          </Row>
        </Container>
    </div>
  )
}

export default Cardapio

