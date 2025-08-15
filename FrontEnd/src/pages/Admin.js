import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button, Modal, Form, Alert } from "react-bootstrap";
import "./Admin.css";

function Admin() {
  const [clientes, setClientes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    cep: "",
    numero_rua: "",
    cidade: "",
    bairro: "",
    rua: "",
    telefone: ""
  });
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await fetch("http://localhost:5000/clientes");
      if (response.ok) {
        const data = await response.json();
        setClientes(data);
      } else {
        showAlert("Erro ao carregar clientes", "danger");
      }
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      showAlert("Erro ao conectar com o servidor", "danger");
    }
  };

  const showAlert = (message, variant) => {
    setAlert({ show: true, message, variant });
    setTimeout(() => setAlert({ show: false, message: "", variant: "" }), 3000);
  };

  const handleEdit = (cliente) => {
    setEditingClient(cliente);
    setFormData({
      nome: cliente.nome,
      cep: cliente.cep,
      numero_rua: cliente.numero_rua,
      cidade: cliente.cidade,
      bairro: cliente.bairro,
      rua: cliente.rua,
      telefone: cliente.telefone
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este cliente?")) {
      try {
        const response = await fetch(`http://localhost:5000/clientes/${id}`, {
          method: "DELETE"
        });
        
        if (response.ok) {
          showAlert("Cliente deletado com sucesso!", "success");
          fetchClientes();
        } else {
          showAlert("Erro ao deletar cliente", "danger");
        }
      } catch (error) {
        console.error("Erro ao deletar cliente:", error);
        showAlert("Erro ao conectar com o servidor", "danger");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:5000/clientes/${editingClient.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        showAlert("Cliente atualizado com sucesso!", "success");
        setShowModal(false);
        fetchClientes();
      } else {
        showAlert("Erro ao atualizar cliente", "danger");
      }
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      showAlert("Erro ao conectar com o servidor", "danger");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingClient(null);
    setFormData({
      nome: "",
      cep: "",
      numero_rua: "",
      cidade: "",
      bairro: "",
      rua: "",
      telefone: ""
    });
  };

  return (
    <Container fluid className="admin-container">
      <Row className="justify-content-center">
        <Col lg={11} md={12}>
          <div className="admin-content">
            <h2 className="admin-title">Painel de Administração</h2>
            <p className="admin-subtitle">Gerencie os dados dos clientes</p>
            
            {alert.show && (
              <Alert variant={alert.variant} className="mb-4">
                {alert.message}
              </Alert>
            )}
            
            <div className="table-responsive">
              <Table striped bordered hover className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CEP</th>
                    <th>Número</th>
                    <th>Cidade</th>
                    <th>Bairro</th>
                    <th>Rua</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="text-center">
                        Nenhum cliente encontrado
                      </td>
                    </tr>
                  ) : (
                    clientes.map((cliente) => (
                      <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cep}</td>
                        <td>{cliente.numero_rua}</td>
                        <td>{cliente.cidade}</td>
                        <td>{cliente.bairro}</td>
                        <td>{cliente.rua}</td>
                        <td>{cliente.telefone}</td>
                        <td>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(cliente)}
                          >
                            Editar
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDelete(cliente.id)}
                          >
                            Deletar
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>

      {/* Modal de Edição */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Número</Form.Label>
                  <Form.Control
                    type="text"
                    name="numero_rua"
                    value={formData.numero_rua}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control
                    type="text"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Rua/Avenida</Form.Label>
              <Form.Control
                type="text"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit">
                Salvar Alterações
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Admin;

