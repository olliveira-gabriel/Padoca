import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LocUnidades(props) {
  return (
    <div className="text-center my-5">
      <h2 className=" nome-loc mb-4" style={{ fontWeight: 'bold' }}>{props.NomeLoc}</h2>

      <Row className="justify-content-center align-items-center">
        <Col md={8} className="p-2">
          <iframe
            src={props.MapaLink}
            width="100%"
            height="463px"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa da unidade ${props.NomeLoc}`}
          ></iframe>
        </Col>

        <Col md={4} className="p-2">
          <img
            src={props.ImgUnidade}
            alt={props.TxtAlternativoUnidade || 'Imagem da unidade'}
            style={{
              width: '100%',
              height: '463px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default LocUnidades;
