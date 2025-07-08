// src/components/FormularioEndereco.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./FormularioEndereco.css";

function FormularioEndereco() {
  const [endereco, setEndereco] = useState({
    nomeCompleto: "",
    cep: "",
    numero: "",
    cidade: "",
    bairro: "",
    ruaAvenida: "",
    telefone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do endereço:", endereco);
    // Aqui você pode adicionar a lógica para processar o pedido
    alert("Pedido finalizado com sucesso!");
  };

  return (
    <div className="formulario-endereco">
      <h3 className="endereco-title">Endereço</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="nomeCompleto"
            placeholder="Nome Completo"
            value={endereco.nomeCompleto}
            onChange={handleChange}
            className="endereco-input"
            required
          />
        </Form.Group>

        <div className="row">
          <div className="col-6">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="cep"
                placeholder="CEP"
                value={endereco.cep}
                onChange={handleChange}
                className="endereco-input"
                required
              />
            </Form.Group>
          </div>
          <div className="col-6">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="numero"
                placeholder="Número"
                value={endereco.numero}
                onChange={handleChange}
                className="endereco-input"
                required
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={endereco.cidade}
            onChange={handleChange}
            className="endereco-input"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={endereco.bairro}
            onChange={handleChange}
            className="endereco-input"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="ruaAvenida"
            placeholder="Rua Avenida"
            value={endereco.ruaAvenida}
            onChange={handleChange}
            className="endereco-input endereco-input-destaque"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={endereco.telefone}
            onChange={handleChange}
            className="endereco-input"
            required
          />
        </Form.Group>

        <Button 
          type="submit" 
          className="finalizar-btn"
          size="lg"
        >
          Finalizar
        </Button>
      </Form>
    </div>
  );
}

export default FormularioEndereco;

