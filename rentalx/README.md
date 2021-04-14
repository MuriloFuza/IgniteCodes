# Cadastro de carros

**Requisitos funcionais**
* [X] Deve ser possível cadastrar um novo carro.
* [X] Deve ser possível listar todas as categorias.

**Regra de negócio**
* [X] Apenas usuários administradores podem realizar cadastros.
* [X] Não deve ser possível cadastrar um carro com uma placa já existente.
* [X] O carro deve ser cadastrado, por padrão, como disponível para aluguel.

# Listagem de carros

**Requisitos funcionais**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponiveis pelo nome da categoria.
Deve ser possível listar todos os carros disponiveis pelo nome do carro.
Deve ser possível listar todos os carros disponiveis pelo nome da marca.

**Regra de negócio**
* [X] O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**Requisitos funcionais**
Deve ser possível cadastrar uam especificação para um carro.

**Regra de negócio**
* [X] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
* [X] Não deve ser possível cadastrar uma mesma especificação já existente para o carro.
* [X] Apenas usuários administradores podem realizar cadastros.

# Cadastro de imagens do carro

**Requisitos funcionais**
Deve ser possível cadastrar a imagem do carro.

**Requisitos não funcionais**
Utilizar o multer para upload dos arquivos.

**Regra de negócio**
* [X] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
* [X] Apenas usuários administradores podem realizar cadastros.

# Aluguel

**Requisitos funcionais**
Deve ser possível cadastrar um aluguel.

**Regra de negócio**
* [X] O aluguel deve ter duração mínima de 24 horas.
* [X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
* [X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
* [X] O usuário deve estar logado.