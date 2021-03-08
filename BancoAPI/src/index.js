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

app.listen(3333);