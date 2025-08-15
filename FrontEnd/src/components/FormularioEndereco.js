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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Dados do endereço:", endereco);

    try {
      const response = await fetch("http://localhost:5000/endereco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: endereco.nomeCompleto,
          cep: endereco.cep,
          numero_rua: endereco.numero,
          cidade: endereco.cidade,
          bairro: endereco.bairro,
          rua: endereco.ruaAvenida,
          telefone: endereco.telefone,
        }),
      });

      if (response.ok) {
        alert("Pedido finalizado com sucesso!");
        setEndereco({
          nomeCompleto: "",
          cep: "",
          numero: "",
          cidade: "",
          bairro: "",
          ruaAvenida: "",
          telefone: ""
        });
      } else {
        alert("Erro ao finalizar pedido.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao conectar com o servidor.");
    }
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


