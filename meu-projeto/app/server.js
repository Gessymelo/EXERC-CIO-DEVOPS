// server.js
const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis',
  port: 6379
});

client.on('error', (err) => {
  console.error('Erro ao conectar ao Redis:', err);
});

// Inicializa a contagem
client.set('visitas', 0);

app.get('/', (req, res) => {
  client.get('visitas', (err, visitas) => {
    if (err) return res.status(500).send('Erro ao acessar o Redis');

    res.send(`Número de visitas: ${visitas}`);
    client.set('visitas', parseInt(visitas) + 1);
  });
});

app.listen(3000, () => {
  console.log('Aplicação web rodando na porta 3000');
});
