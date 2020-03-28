const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
  Métodos HTTP:
  GET: Buscar alguma informação do backend
  POST: Criar alguma informação no backend
  PUT: Alterar alguma informação no backend
  DELETE: Excluir alguma informação do backend

  Parâmetros:
  Query Params: São parâmetros nomeados que são enviados na URL
                Ex: http://localhost:3333/users?name=Luis
        Pode ser acessado através do request.query.
  Route Params: São parâmetros que são enviados na URL
                Ex: http://localhost:3333/:id
        Pode ser acessado através do request.params, utilizado para identificar
        recursos/rotas.
  Body: Informações que são enviadas no corpo da requisição
        Pode ser acessado através do request.body, utilizado apenas em POST
        e PUT.
*/
