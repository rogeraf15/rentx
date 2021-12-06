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
Ao realizar um aluguel, o status do carro deverá ser alterado para indísponivel.

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro.

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para o outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário da devolução seja superior ao horário previsto de entrega, deverá ser cobrado.
multa proporcioanal aos dias de atraso.
Caso haja multa, deverá ser somada ao total do aluguel.
O usuário deve estar logado na aplicação.

# Recuperar senha

**RF**
Deve ser possível o usuário recuperar a senha informadando o e-mail.
O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.
O usuário deve conseguir inserir uma nova senha.

**RN**
O usuário precisa informar uma nova senha.
O link enviado apra a recuperação deve expirar em 3 horas.
