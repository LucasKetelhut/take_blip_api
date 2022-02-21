<h1 align="center">
#Desafio TakeBlip
</h1>

> Desafio Concluído :heavy_check_mark:

### Tópicos

:small_blue_diamond: [Sobre o desafio](#-sobre-o-desafio)

:small_blue_diamond: [Resultado esperado do desafio](#resultado-esperado-do-desafio)

:small_blue_diamond: [Formato do arquivo JSON](#-formato-do-arquivo-json)

:small_blue_diamond: [Como executar o Projeto](#como-executar-o-projeto)

:small_blue_diamond: [Links](#links)

:small_blue_diamond: [Licença](#licença)

---

## 🤖 Sobre o desafio
A ideia central foi a criação de um ChatBot pela plataforma da Blip, que lista os 6 valores da empresa. Além disso, há um sétimo tópico "Desafio", onde nos foi cobrado a criação de uma API intermediária para buscar os dados da API do Github referente aos reposítórios da Take Blip. No desafio, devemos listar os 5 repositórios de C# mais antigos.

## Resultado esperado do desafio

- [x] O fluxo conversacional do seu chatbot deve estar exatamente como o que está sendo pedido no
exemplo enviado.
- [x] Seu chatbot deve consumir a sua API intermediária (API que você criou para consumir a API do GitHub).
- [x] Você deverá exportar o fluxo do seu chatbot e inserir no repositório o .json do fluxo.
- [x] Fazer deploy da aplicação e enviar o link do repositório para avaliação.

---

## 🎨 Formato do arquivo JSON

<h3>Explicação do JSON de retorno da API:</h3>

```json
{
    "name": "nome do repositório",
    "description": "descrição do repositório",
    "image": "imagem de perfil do dono do perfil"
}
```

---
## Como executar o Projeto

```bash

# Abrir pasta do projeto
$ cd take_blip_api
# Ir para a pasta src
$ cd src
# Instalar as dependências
$ npm install
# Executar a aplicação em seu ambiente local
$ npm run dev
# O servidor irá iniciar na porta:3333 - acesse http://localhost:3333/repositories

```
---

## Links 

- Link do deploy da API feito pelo Heroku: <a href="https://take-blip-api-lucas.herokuapp.com/repositories">API no Heroku</a>
- Link do Chatbot na plataforma TakeBlip: <a href="https://lucas-ketelhut-qkbyk.chat.blip.ai/?appKey=bHVjYXNib3QzOjJlYTFhYTQ0LTg5ZDMtNDQ0MC05YmJlLTcxNThjZmQzMTUzYQ==">Chatbot desenvolvido</a>

---

## Licença

The [MIT License]() (MIT)

Copyright ©️ 2022
```
