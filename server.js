const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
import React from 'react';
import ReactDOM from 'react-dom';
import MeuComponente from './MeuComponente';

ReactDOM.render(
  <React.StrictMode>
    <MeuComponente />
  </React.StrictMode>,
  document.getElementById('root')
);


const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();

// Configurar o servidor JSON simulado com o db.json
const jsonServerRouter = jsonServer.router(path.join(__dirname, 'db.json'));

// Middleware para adicionar cabeçalhos CORS (permitir solicitações de qualquer origem)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Roteamento da API
app.use('/api', jsonServerRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`https://emocoes.onrender.com ${port}`);
});
