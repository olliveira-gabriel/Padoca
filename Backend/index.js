require("dotenv").config();
const express = require('express');
const cors = require('cors');
const db = require("./db");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.json({ message: "Funcionando!!!" });
});

app.post('/endereco', async (req, res) => {
  const { nome, cep, numero_rua, cidade, bairro, rua, telefone } = req.body;

  try {
    await db.insertCustomer({ nome, cep, numero_rua, cidade, bairro, rua, telefone });
    res.status(201).json({ mensagem: "Endereço salvo com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao salvar endereço" });
  }
});


app.get('/clientes', async (req, res) => {
  try {
    const clientes = await db.selectCustomers();
    res.json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao buscar clientes" });
  }
});

// Rota para deletar um cliente
app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    await db.deleteCustomer(id);
    res.json({ mensagem: "Cliente deletado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao deletar cliente" });
  }
});

// Rota para atualizar um cliente
app.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, cep, numero_rua, cidade, bairro, rua, telefone } = req.body;
  
  try {
    await db.updateCustomer(id, { nome, cep, numero_rua, cidade, bairro, rua, telefone });
    res.json({ mensagem: "Cliente atualizado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao atualizar cliente" });
  }
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
