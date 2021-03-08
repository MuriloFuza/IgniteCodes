# Aula 1
## Conceitos NODE
### O que é Node.JS?
  - Plataforma open-source permite execução da linguiagem `javascript` do lado do servidor

  - V8 + libuv + conjunto de módulos

### Características do Node.js
- Arquitetura Event Loop
  - `Call Stack`
- Sigle - Thread
- Non-blocking I/O
- Modulos próprios 
  - `Http`
  - `DNS `
  - `FS`
  - `BUFFER`

### Event Loop
- Toda vez que uma função chega para call stack, o evente loop fica escutando as requisições, uma por vez
- Assim que é escutado a função, ele manda a mesma para uma thread, tendo 4 threads disponiveis

@import "./Imagens/eventloop.PNG"

### O que são `gerenciadores` de pacotes
- NPM e Yarn
- Instalar bibliotecas externas
- Disponibilizar bibliotecas
- Vamos utilizar o `Yarn`

### Frameworks
- Express: Utilizaremos esse!
- Egg.js
- Nest.js
- Adonis.js

## API
### O que é API?
- Application Programing Interface
- Conjunto de especificações de possíveis interações entre aplicativos
- Documentação para desenvolvedor
### O que é REST?
- Representation State Transfer
- Modelo de arquitetura
#### Regras Rest
- 1 - Cliente-Server
- 2 - Stateless 
- 3 - Cache
- 4 - Interface Uniforme
  - Identificação dos recursos
     - http://endereço.com/products
  - Representação dos recursos
  - Mensagens auto-descritivas
  - HATEOAS(Hypertext As The Engine Of Application State)
- 5 - Camadas
- 6 - Código Sob Demanda

### Métodos de Requisição - HTTP Verbs
- `GET`: Leitura
- `POST`: Criação
- `PUT`: Atualização
- `DELETE`: Deleção
- `PATCH`: Atualização parcial
### HTTP Codes
##### 1xx: Informativo 
- a solicitação foi aceita ou processo continua em andamento

##### 2xx: Confirmação
  - `201` - Requisição bem sucedida
  - `202` - Created: Geralmente usado para POST após uma inserção 

##### 3xx: Redirecionamento
  - `301` - Moved Permanently
  - `302` - Moved 

##### 4xx: Erro do cliente
  - `401` - BAD request
  - `402` - Unauthorized
  - `403` - Forbidden
  - `404` - Not found
  - `422` - Unprocessable Entity

 ##### 5xx: Erro do servidor
 - `500` - Internal Server Error
 - `502` - Bad Gateway 

 ### Parâmetros das Requisições
- Header Params
@import "./Imagens/params1.PNG"
- Query Params
  - http://endereco.com.br/v1/users?page=2&limit=50
  - chave
  - valor
  - separação
- Route Params
  - http://endereco.com.br/v1/users/{id}
- Body Params
`
  {
    "name":"Murilo"
    "username":"Mu" 
  } 
`

### Boas práticas API Rest
- A utilização correta dos métodos HTTP
- A utilização correta dos status no retorno das respostas
- Padrão de nomenclatura
  - Buscas de usuários - GET
    - http://endereco.com.br/v1/users
  - Busca de usuários por id - GET
    - http://endereco.com.br/v1/users/1
  - Busca de endereço de usuario - GET
    - http://endereco.com.br/v1/users/1/adress
  - Deleção de um usuário - DELETE
    - http://endereco.com.br/v1/users/1
  - Atualização do status do usuário - PATCH
    - http://endereco.com.br/v1/users/1/status







