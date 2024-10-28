// server.js
const express = require('express');
const app = express();

// Carrega as variáveis de ambiente
const port = process.env.PORT || 3000;
const databaseName = process.env.DATABASE_NAME || 'default_db';

app.get('/', (req, res) => {
    res.send(`Configurações: Porta - ${port}, Banco de Dados - ${databaseName}`);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
