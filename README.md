# 🎓 Curso de Lógica de Programação: Praticando com Desafios

## 📋 Projeto: Sorteador de Números

---

### 🚀 Explicando o Funcionamento do Código (`App.js`)

#### 🔧 Função `Sortear`

A função `Sortear` é responsável por todo o funcionamento do sorteador. Abaixo está o detalhamento do seu funcionamento:

1. **Criação de Variáveis**:
   - Inicialmente, são criadas variáveis que capturam os dados inseridos nos campos de input do HTML.
   - O uso de `.value` permite que a variável traga as informações digitadas no input correspondente ao ID especificado na função `getElementById`.

2. **Validação de Entradas**:
   - **Primeiro `IF`**:
     - Verifica se o número inserido no campo "Do número" é maior que o número no campo "Até o número".
     - Se verdadeiro, exibe um alerta: `O número inicial ${inicio} é maior que o número final ${fim}`.
   - **Segundo `IF`**:
     - Verifica se a diferença entre os números inseridos é menor que a quantidade de números a serem sorteados.
     - Se verdadeiro, exibe um alerta: `A diferença entre o início e fim: ${diferenca} é menor que a quantidade ${quantidade}`.

3. **Geração de Números Aleatórios**:
   - O laço de repetição `FOR` é responsável por gerar números aleatórios com base na quantidade especificada.
   - A variável `numero` recebe um número aleatório gerado pela função `obterNumeroAleatorio`, usando como parâmetros `min` (início) e `max` (fim).
   - O número gerado é então salvo no array `sorteados`.

4. **Verificação de Duplicidade**:
   - Dentro do laço `FOR`, uma condição `WHILE` verifica se o número gerado já existe no array `sorteados`.
   - Se o número já estiver presente, a função `obterNumeroAleatorio` é chamada novamente até que um número diferente seja sorteado.

5. **Atualização do Resultado**:
   - A variável `resultado` substitui o texto "nenhum até agora" na frase "Números sorteados: nenhum até agora" pelo resultado dos números sorteados.
   - Em seguida, a função `alterarStatusBotao()` é chamada.

#### 🟢 Função `alterarStatusBotao()`

Essa função muda o status do botão "Reiniciar". Ela é chamada em duas situações:

- **Após a Apresentação do Resultado**:
  - Assim que o resultado é exibido, a função `alterarStatusBotao()` verifica o status atual do botão "Reiniciar".
  - Se o botão está "desabilitado" (cinza), a função altera o status para "habilitado", permitindo que o jogo seja reiniciado.

#### 🔄 Função `reiniciar()`

A função `reiniciar()` é chamada quando o botão "Reiniciar" é habilitado. Suas responsabilidades incluem:

- Limpar os campos de input.
- Alterar o texto exibido no campo de resultado.
- Alterar o status do botão "Reiniciar" de volta para "desabilitado".

Quando a função `alterarStatusBotao()` é chamada novamente, a condição `else` é ativada para reverter o status do botão.

#### 🎲 Função `obterNumeroAleatorio(min, max)`

Diferente das funções anteriores, `obterNumeroAleatorio()` possui dois parâmetros: `min` e `max`. Essa função gera números aleatórios entre o valor inserido no campo "Do número" e "Até o número".

- **Nota**: Por ser uma função padrão, você pode entender melhor seu funcionamento lendo a [documentação oficial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

---

### 🔧 Como Executar o Projeto

1. **Clonar o Repositório**:
   - Clone este repositório para a sua máquina local.

   ```bash
   git clone https://github.com/MichaelKnopacki/SorteadorNumeros.git
