const { response } = require('express');
const express = require('express')

const app = express()

app.use(express.json());

app.get('/courses', (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json([
    'curso 1',
    'curso 2',
    'curso 3'
  ])
});

app.post('/courses', (request, response) => {
  const req = request.body;
  console.log(req);
  return response.json([
    'curso 1',
    'curso 2',
    'curso 3',
    'curso 4'
  ])
})

app.put('/courses/:id', (request, response) => {
  const id = request.params;
  console.log(id);
  return response.json([
    'curso 6',
    'curso 2',
    'curso 3',
    'curso 4'
  ])
})

app.patch('/courses/:id', (request, response) => {
  return response.json([
    'curso 6',
    'curso 2',
    'curso 5',
    'curso 4'
  ])
})

app.delete('/courses/:id', (request, responde) => {
  return response.json([
    'curso 2',
    'curso 5',
    'curso 4'
  ])
})


app.listen(3333);