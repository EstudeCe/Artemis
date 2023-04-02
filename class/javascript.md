## DOM

A DOM é uma forma padrão de representar um document, que é o nosso código HTML. Com essa forma padrão de representar os nossos elementos, conseguimos realizar alterações utilizando JavaScript, Python, entre outras linguagens. E as alterações serão refletidas para o nosso código HTML.

Dessa forma, utilizamos a manipulação da DOM para realizar as alterações no documento HTML. Permitindo adicionar elementos, alterar, modificar os atributos, entre outras funcionalidades.

## Vinculando o HTML e o código JavaScript

Para realizar o vínculo entre o nosso arquivo JavaScript e o arquivo HTML, vamos adicionar antes de encerrar a tag body, uma tag script. E vamos passar para o atributo src o path do arquivo de scripts da nossa aplicação.

```
  <script src="script.js"></script>
</body>
```

## Acessando os elementos da DOM

Para acessar os elementos da DOM, podemos atribuir esse elemento a uma variável JavaScript, e vamos acessar o document.

```
const button = document.getElementById
const button = document.getElementsByClassName
```

## Atributo onClick

Os elementos HTML possuem atributos que podemos passar valores, e dentre esses atributos, encontramos o atributo onClick. Que é chamado sempre quando realizamos um click em um elemento HTML.

## Utilizando o addEventListener

O event listener é uma função que é executada em resposta a um evento. Por exemplo, quando passamos um eventListener para um elemento, o elemento vai ficar ouvindo um evento daquele tipo, e caso o evento ocorra, ele executa uma função.

## Array

Como vimos anteriormente, um array é uma lista de valores. E esses valores podem assumir todos os tipos que já conhecemos. E por ser uma forma fácil de trabalhar, normalmente os bancos de dados, e até mesmo os desenvolvedores armazenam informações de um mesmo tipo dentro de um array. E quando precisamos especificar mais, utilizamos objetos para detalhar algumas informações dentro deste array.

## Math JavaScript

A lib Math fornece diversos métodos para lidarmos com operações matemáticos, e estruturas numericas.

[Documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## O que são funções

Funções são determinados blocos de código que podem ser chamados em qualquer lugar da aplicação. Nós utilizamos as funções para agrupar um bloco de código, de maneira que cada parte tenha sua funcionalidade especifica dentro da aplicação.

### Parametros

Todas as funções podem ou não receber parametros, os parametros são informações que nós passamos para essas funções quando estamos chamando, e podemos utilizar os parametros dentro do corpo da função.

[Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

## Código declarativo e código imperativo

Nós podemos criar a estrutura do nosso código de duas maneiras diferentes. Podendo ser declarativo ou imperativo.

### Imperativo

Quando estamos iniciando, vamos optar por um código mais imperativo para entender a lógica por trás, e o que esta funcionando. Essa estrutura tem como padrão dizer para a linguagem como determinada ação deve ser feita. Vamos tomar como exemplo uma funçãoo que percorre um array.

Em um código imperativo, nós vamos dizer para o JavaScript **como** queremos que ele percorra o array, e tudo vai ficar sobre a nossa responsabilidade, tal como o método para percorrer o array, o contador e tudo mais.

### Declarativo

Agora em um código declarativo, nós vamos dizer para o JavaScript **\*o que** queremos que ele faça. No mesmo exemplo de cima, não vamos percorrer manualmente cada item do array, vamos apenas dizer para o JavaScript o que queremos que ele faça, nesse caso, percorrer o array, e não importa como ele vai fazer isso por trás dos panos.

[Exemplo](https://blog.matheuscastiglioni.com.br/programacao-imperativa-x-declarativa/)
