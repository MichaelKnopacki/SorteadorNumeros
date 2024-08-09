# Curso de Lógica de Programação: Praticando com Desafios

## Projeto: Sorteador de Números

### Descrição

Este projeto é parte do curso de Lógica de Programação e foi criado para praticar conceitos de programação através da criação de um sorteador de números. O projeto utiliza HTML e JavaScript para implementar uma aplicação simples que sorteia números aleatórios com base em parâmetros definidos pelo usuário.

### Funcionamento do Código (App.js)

#### Função `Sortear`

A função `Sortear` é a peça central do sorteador, responsável por todo o seu funcionamento. Abaixo estão os detalhes de como essa função opera:

1. **Variáveis e Campos de Input**:
   - A função começa criando variáveis que armazenam os dados inseridos nos campos de input do HTML.
   - O método `.value` é usado para capturar as informações digitadas pelos usuários dentro dos inputs correspondentes. Essas informações são obtidas utilizando a função `getElementById`, que identifica o campo de input pelo seu ID.

2. **Validação de Inputs**:
   - **Primeiro IF**:
     - A função verifica se o número inserido no campo "Do número" é maior que o número inserido no campo "Até o número".
     - Se essa condição for verdadeira, um alerta é emitido com a mensagem: `O número inicial ${inicio} é maior que o número final ${fim}`.
   - **Segundo IF**:
     - A função verifica se a diferença entre os valores dos campos "Do número" e "Até o número" é menor que o valor inserido no campo "Quantidade de números".
     - Se essa condição for verdadeira, um alerta é emitido com a mensagem: `A diferença entre o início e fim: ${diferenca} é menor que a quantidade ${quantidade}`.

3. **Laço de Repetição `FOR`**:
   - O laço `FOR` é utilizado para gerar os números aleatórios com base no valor inserido no campo "Quantidade de números".
   - Dentro do laço, existe uma condição `WHILE` que garante que o mesmo número não seja sorteado duas vezes, assegurando a unicidade dos números sorteados.

### Como Executar o Projeto

1. **Clonar o Repositório**:
   - Clone este repositório para a sua máquina local.

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
