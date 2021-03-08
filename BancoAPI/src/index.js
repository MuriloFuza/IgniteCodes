const { request, response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

/** User
 * CPF - string
 * name - string
 * id - uuid
 * statement - array[] 
 */
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  const customersAlrealdyExists = customers.some(
    (customer) => customer.cpf === cpf);

  if (customersAlrealdyExists) {
    return response.status(400).json({ error: 'CPF já existente' });
  }

  customers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: []
  });

  console.log(customers);
  return response.status(201).json({ message: 'Criado com sucesso!' });
})

app.get('/statement/:cpf', (request, response) => {
  const { cpf } = request.params;

  const customer = customers.find(customer => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: 'Costumer not found!' })
  }

  return response.json(customer.statement);
})

app.listen(3333);