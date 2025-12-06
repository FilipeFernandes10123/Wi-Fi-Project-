const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

// Rota simples
app.get('/', (req, res) => {
  res.send('Servidor HTTPS com certificado self-signed 🚀');
});

// Ler chave e certificado
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Criar servidor HTTPS
https.createServer(options, app).listen(3000, () => {
  console.log('Servidor HTTPS a correr em https://localhost:3000');
});
