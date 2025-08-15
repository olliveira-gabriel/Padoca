# Projeto Padoca 011 - Sistema Completo

## Descrição
Sistema completo da Padoca 011 com frontend React e backend Node.js, incluindo formulário de carrinho conectado ao banco de dados PostgreSQL e painel de administração para gerenciar dados dos clientes.

## Integrantes
- https://github.com/olliveira-gabriel
- https://github.com/jeff0proprio

## Funcionalidades Implementadas

### 1. Conexão Frontend-Backend
- ✅ Formulário do carrinho conectado ao backend
- ✅ Envio de dados do cliente para o banco de dados PostgreSQL
- ✅ Validação e feedback ao usuário

### 2. Página de Administração
- ✅ Visualização de todos os clientes cadastrados
- ✅ Edição de dados dos clientes
- ✅ Exclusão de clientes
- ✅ Interface responsiva e intuitiva

### 3. Backend API
- ✅ Rota POST `/endereco` - Salvar dados do cliente
- ✅ Rota GET `/clientes` - Listar todos os clientes
- ✅ Rota PUT `/clientes/:id` - Atualizar cliente
- ✅ Rota DELETE `/clientes/:id` - Deletar cliente

### 4. Banco de Dados
- ✅ Tabela `dados_cliente` com todos os campos necessários
- ✅ Configuração PostgreSQL
- ✅ Conexão segura com pool de conexões

## Estrutura do Projeto

```
Padoca/
├── Backend/
│   ├── index.js          # Servidor principal
│   ├── db.js             # Configuração do banco
│   ├── .env              # Variáveis de ambiente
│   └── package.json      # Dependências
└── FrontEnd/
    ├── src/
    │   ├── pages/
    │   │   ├── Carrinho.js   # Página do carrinho
    │   │   └── Admin.js      # Página de administração
    │   ├── components/
    │   │   └── FormularioEndereco.js  # Formulário conectado
    │   └── App.js            # Rotas da aplicação
    └── package.json          # Dependências
```

## Como Executar

### Backend
```bash
cd Backend
npm install
node index.js
```
Servidor rodará na porta 5000

### Frontend
```bash
cd FrontEnd
npm install
npm start
```
Aplicação rodará na porta 3000

### Banco de Dados
```bash
# Criar banco
sudo -u postgres psql -c 'CREATE DATABASE padoca_db;'

# Criar tabela
sudo -u postgres psql -d padoca_db -c 'CREATE TABLE dados_cliente (id SERIAL PRIMARY KEY, nome VARCHAR(255), cep VARCHAR(10), numero_rua VARCHAR(10), cidade VARCHAR(255), bairro VARCHAR(255), rua VARCHAR(255), telefone VARCHAR(20));'
```

## Rotas da Aplicação

- `/` - Página inicial
- `/carrinho` - Carrinho de compras com formulário
- `/admin` - Painel de administração
- `/cardapio` - Cardápio
- `/unidades` - Unidades
- `/sobreNos` - Sobre nós
- `/parceiros` - Parceiros

## Tecnologias Utilizadas

- **Frontend**: React, React Bootstrap, React Router
- **Backend**: Node.js, Express.js, CORS
- **Banco de Dados**: PostgreSQL
- **Outras**: dotenv para variáveis de ambiente

## Funcionalidades Testadas

1. ✅ Adição de produtos ao carrinho
2. ✅ Preenchimento do formulário de endereço
3. ✅ Envio dos dados para o backend
4. ✅ Salvamento no banco de dados
5. ✅ Visualização dos dados na página de administração
6. ✅ Edição de dados dos clientes
7. ✅ Interface responsiva

## Status do Projeto
🟢 **CONCLUÍDO** - Todas as funcionalidades solicitadas foram implementadas e testadas com sucesso.
