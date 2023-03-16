# Primeira Contribuição

Aqui tem mais alguns detalhes sobre como é a contribuição para o projeto

Se não possui o git em sua máquina, [instale-o aqui](https://help.github.com/articles/set-up-git/).

## Faça um _Fork_ deste repositório

<img align="right" width="300" src=".github\fork.png" alt="forkar este repositório" />
Faça um _Fork_ clicando no botão "_Fork_" no topo desta página, uma cópia deste repositório será criada em sua conta.

## Clone o repositório

<img align="right" width="300" src=".github\clone.png" alt="clonar este repositório" />

Agora clone este repositório para a sua máquina. Clique no botão "_Clone or download_" e, em seguida, clique no ícone "_Copy to clipboard_" para copiar a URL.

Abra um terminal e execute o seguinte comando do git:

```
git clone "url que copiou"
```

onde "url que copiou" (sem as aspas) é a URL deste repositório (seu fork deste projeto). Consulte as etapas anteriores para obter a URL.

<img align="right" width="300" src=".github\clipboard.png" alt="copiar URL" />

Por exemplo:

```
git clone https://github.com/seu-usuario/first-contributions.git
```

onde "seu-usuário" é o seu usuário do _GitHub_. Aqui você estará copiando o conteúdo do repositório _first-contributions_ para o seu computador.

## Crie um Branch

Acesse o diretório do repositório no seu computador (caso você não esteja nele):

```
cd nome do repositorio
```

Agora crie um _Branch_ usando o comando `git branch -b`:

```
git branch -b <nome-da-branch>
```

Por exemplo:

```
git branch -b feature-button
```

Esse comando vai criar uma nova branch e já vai iniciar a nova branch no seu repositório local.

## Efetue as alterações necessárias e faça um _Commit_

Agora, abra o projeto e faça as alterações necessárias em seu editor de código e adicione o seu nome a ele. Não o adicione no início ou no final do arquivo. Coloque-o em qualquer lugar no meio. Agora, salve o arquivo.

Se você for para o diretório do projeto e executar o comando `git status`, verá que há alterações. Adicione essas alterações ao _Branch_ que você acabou de criar utilizando o comando `git add`:

```
git add .
```

Esse comando vai adicionar todos os arquivos que foram alterados.

Agora, confirme essas alterações usando o comando git commit `git commit`:

```
git commit -m "Escreva um comentário para o seu commit"
```

## Faça um Push das alterações para o _GitHub_

Envie suas alterações usando o comando `git push`:

```
git push origin <nome-da-sua-branch>
```

substituindo `<nome-da-sua-branch>` pelo nome do _Branch_ que você criou anteriormente.

## Envie suas alterações para serem revisadas

Se você for para o seu repositório no _GitHub_, verá um botão `Compare & pull request`. Clique nesse botão.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="Crie um Pull Request" />

Agora envie um _Pull Request_.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="Envie o Pull Request" />

Logo estará mesclando ('mergeando') as suas mudanças no _Branch_ principal (master) deste projeto. Você receberá um e-mail de notificação quando as alterações forem mescladas.

## Para onde ir a partir daqui?

Com isso você completou o fluxo de trabalho básico _fork -> clone -> edit -> PR_ que você encontrará frequentemente como contribuidor!
