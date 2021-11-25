# Cadastro de carro

**RF**
[x] - Deve ser possível cadastrar um novo carro.

**RN**
[x] - Não deve ser possível cadastrar um carro com uma placa ja existente.
[x] - O carro deve ser cadastrado, por padrão, com disponibilidade.
<!-- O usúario responsavel pelo cadastro deve ser um usuário administrador. -->

# Listagem de carros

**RF**
[x] - Deve ser possível listar todos os carros disponíveis.
[x] - Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
[x] - Deve ser possível listar todos os carros disponíveis pelo nome da marca.
[x] - Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
[x] - O usuário náo precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma mesma especificação para um mesmo carro.

# Cadastro de imagens no carro

**RF**
Deve ser possível cadastrar varias images para um carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usúario responsavel pelo cadastro deve ser um usuário administrador.

# Aluguel de carro para um usuário

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação.