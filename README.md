# Blogs API
<div>
  <img src="./docs/images/header.jpg" alt="Uma imagem relacionada ao projeto">
</div>

---

## Inicialização
Para executar o projeto, utilize as ferramentas descritas na sessão *Ferramentas*.

## Ferramentas
* [Node.js](https://nodejs.org/en/) - Software para permitir execução de Javascript fora do navegador web.
* [Express](https://expressjs.com/pt-br/) - Framework para criação do servidor.
* [Sequelize](https://sequelize.org/) - ORM para mapeamento e comunicação com o banco de dados.
* [JWT](https://jwt.io/) - Criação de tokens com assinatura.

# Blogs API

## Introdução

Este projeto possui o objetivo principal de servir a blogs conteúdos de seu banco de dados. É ele quem vai fazer a integração das informações que estão salvas no servidor com o seu front-end.

---

## Análise técnica

 - ### Descrição do ambiente técnico

O sistema é composto por um banco de dados e uma API Rest que utiliza da arquitetura MSC para realizar as operações CRUD.
As ferramentas utilizadas para o desenvolvimento incluem Node.js, Express e JWT para autenticações e MySQL atuando como sistema gerenciador de banco de dados relacional. Entretanto pode ser utilizado com os frameworks de banco de dados que o Sequelize cobre.

---

- ### Mensagens internas

Rotas utilizadas pela aplicação web para executar metodos de **POST**, **GET**, **PUT** e **DELETE** no banco de dados. Onde o retorno de cada uma das funções estara contido em um endpoint.

| Nome | Funcionalidade|
|------|--------------|
|```POST``` /user|Cria um usuário ao enviar um body JSON com o seguinte [formato](#post-user)|
|```POST``` /login|Permite que um usuário logue ao enviar um body JSON com o seguinte [formato](#post-login)|
|```GET``` /user|Retorna um JSON com um array no seguinte [formato](#get-user)|
|```GET``` /user:id|Retorna detalhes do usuário no seguinte [formato](#get-userid)|
|```POST``` /categories|Cria uma categoria ao enviar um body JSON com o seguinte [formato](#post-categories)|
|```GET``` /categories|Retorna um array de categorias no seguinte [formato](#get-categories)|
|```POST``` /post|Cria um post ao enviar um body JSON com o seguinte [formato](#post-post)|
|```GET``` /post|Retorna um array de posts com o seguinte [formato](#get-post)|
|```GET``` /post:id|Retorna detalhes do post no seguinte [formato](#get-postid)|
|```PUT``` /post:id|Atualiza um post ao enviar um body JSON com o seguinte [formato](#put-postid)|
|```DELETE``` /post:id|Deleta o post com o id especificado e não tem [retorno](#delete-postid)|
|```DELETE``` /user/me|Deleta um usuário autenticado e não tem [retorno](#delete-userme)|

---

 - ### Formatos de requisição e retornos

#### POST ```/user```

```json
// envia
{
  "displayName": "Leomar Linhares",
  "email": "exemplo@exemplo.com",
  "password": "senha_segura",
  "image": "https://picsum.photos/200"
}

// retorna
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

### POST ```/login```

```json
// envia
{
  "email": "email@mail.com",
  "password": "123456"
}

// retorna
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

### GET ```/user```

```json
// retorna
[
  {
    "id": "401465483996",
    "displayName": "Leomar Linhares",
    "email": "exemplo@exemplo.com",
    "image": "https://picsum.photos/200"
  }
]
```

### GET ```/user:id```

```json
// retorna
{
  "id": "401465483996",
  "displayName": "Leomar Linhares",
  "email": "exemplo@exemplo.com",
  "image": "https://picsum.photos/200"
}
```

### POST ```/categories```

```json
// envia
 {
   "name": "Tecnologia"
 }
```

### GET ```/categories```

```json
// retorna
[
  {
    "id": 1,
    "name": "Escola"
  },
  {
    "id": 2,
    "name": "Tecnologia"
  }
]
```

### POST ```/post```

```json
// envia
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

### GET ```/post```

```json
// retorna
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Leomar Linhares",
      "email": "exemplo@exemplo.com",
      "image": "https://picsum.photos/200"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
]
```

### GET ```/post:id```

```json
// retorna
{
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
    "id": 1,
    "displayName": "Leomar Linhares",
    "email": "exemplo@exemplo.com",
    "image": "https://picsum.photos/200"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    }
  ]
}
```

### PUT ```/post:id```

```json
// envia
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

### DELETE ```/post:id```

```json
// não envia nada e não possuí retorno, apenas deleta o post com o id especificado.
```

### DELETE ```/user/me```

```json
// não envia nada e não possuí retorno, apenas deleta o usuário autenticado.
```
