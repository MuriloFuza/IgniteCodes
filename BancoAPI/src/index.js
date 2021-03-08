const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const costumers = [];

/** User
 * CPF - string
 * name - string
 * id - uuid
 * statement - array[] 
 */
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  const id = uuidv4();

  costumers.push({
    id,
    cpf,
    name,
    statement: []
  });

  console.log(costumers);
  return response.status(201).send('Criado com sucesso!');
})

app.listen(3333);