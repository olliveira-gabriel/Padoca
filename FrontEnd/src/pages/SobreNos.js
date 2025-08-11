import BannerSobre from '../img/Banner_sobreNos.png';
import Banner from '../components/Banner.js';
import LogoBranca from '../img/Logo branca.png';
import PaoQ from '../img/PaoQ.png';
import BoloT from '../img/BoloT.png';
import Padaria from '../img/PAdaria.png';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './SobreNos.css';

function SobreNos() {
  return (
    <div>
      <Banner Banner={BannerSobre} />

      <Container className="my-5">
        <Row className="Sobre-nos mb-5">
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center text-center">
             <div style={{ maxWidth: '90%' }}>
                <h2 className="fw-bold mb-4">Sobre nós</h2>
                <p style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed nisi lobortis, rhoncus nulla id, cursus dolor. Mauris ut ante eget turpis hendrerit bibendum quis vel lectus. Donec vestibulum luctus congue. Proin sit amet eros sagittis, pellentesque turpis et, tristique elit. Sed lacinia varius laoreet. Vestibulum rhoncus posuere nunc. Duis ligula mauris, aliquam a ultricies at, posuere eu turpis. Sed id leo justo. Mauris euismod turpis ligula, iaculis vestibulum nibh venenatis ac. Maecenas suscipit tortor quis iaculis consectetur. Nam sed egestas lorem. Integer et tortor vel enim vulputate placerat. Vestibulum purus augue, efficitur et interdum cursus, vehicula eget metus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed nisi lobortis, rhoncus nulla id, cursus dolor. Mauris ut ante eget turpis hendrerit bibendum quis vel lectus. Donec vestibulum luctus congue. Proin sit amet eros sagittis, pellentesque turpis et, tristique elit. Sed lacinia varius laoreet. Vestibulum rhoncus posuere nunc. Duis ligula mauris, aliquam a ultricies at, posuere eu turpis. Sed id leo justo. Mauris euismod turpis ligula, iaculis vestibulum nibh venenatis ac. Maecenas suscipit tortor quis iaculis consectetur. Nam sed egestas lorem. Integer et tortor vel enim vulputate placerat. Vestibulum purus augue, efficitur et interdum cursus, vehicula eget metus.
                </p>
            </div>
          </Col>

          <Col md={6}>
            <Row className="g-4">
              <Col xs={6}><img src={LogoBranca} className="img-sobre" alt="Logo" /></Col>
              <Col xs={6}><img src={PaoQ} className="img-sobre" alt="Pão de Queijo" /></Col>
              <Col xs={6}><img src={BoloT} className="img-sobre" alt="Bolo" /></Col>
              <Col xs={6}><img src={Padaria} className="img-sobre" alt="Padaria" /></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SobreNos;
