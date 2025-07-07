import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormsEndereco() {
  return (
    <Form>
      <h3 className="mb-4" style={{ fontWeight: 'bold', textAlign: 'center' }}>Endereço</h3>

      <Form.Group className="mb-3" controlId="formNomeCompleto">
        <Form.Label>Nome Completo</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formCep">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              placeholder="00000-000"
              maxLength={9}
              name="cep"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formNumero">
            <Form.Label>Número</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formCidade">
        <Form.Label>Cidade</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBairro">
        <Form.Label>Bairro</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRua">
        <Form.Label>Rua/Avenida</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTelefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="(00) 00000-0000"
          maxLength={15}
          name="telefone"
        />
      </Form.Group>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Button variant="danger" type="submit" style={{ fontWeight: 'bold', padding: '0.6rem 3rem' }}>
          Finalizar
        </Button>
      </div>
    </Form>
  );
}

export default FormsEndereco;
