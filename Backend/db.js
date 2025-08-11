const { Pool } = require("pg");

async function connect() {
 
    if (global.connection)
      return global.connection.connect();
  
    const pool = new Pool({
      user: process.env.USER_NAME,
      host: process.env.HOST_NAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      dialect: process.env.DB_DIALECT,
      port: process.env.PORT_NUMBER
    });
    
    const client = await pool.connect();
    console.log("Connection pool created successfully!");
    const resdb = await client.query("SELECT now()");
    console.log(resdb.rows[0]);
    client.release();
    
    // Armazena o pool de conexões globalmente para reutilizá-lo.
    global.connection = pool;
    return pool.connect();
}

async function selectCustomers() {
  const client = await connect();
  const res = await client.query("SELECT * FROM dados_cliente");
  return res.rows;
}

async function insertCustomer(customer) {

    const client = await connect()

    const sql = "INSERT INTO dados_cliente(nome, cep, numero_rua, cidade, bairro, rua, telefone) VALUES($1, $2, $3, $4, $5, $6, $7);";

    const values = [customer.nome, customer.cep, customer.numero_rua, customer.cidade, customer.bairro, customer.rua, customer.telefone];

    await client.query(sql, values);


}  

  

module.exports = {
  selectCustomers,
  insertCustomer
}