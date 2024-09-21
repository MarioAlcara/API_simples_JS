console.log('Iniciando o servidor...');

const express = require('express');
const app = express();

// Dados de exemplo
const produtos = [
    { id: 1, nome: 'Produto A', preco: 10.99 },
    { id: 2, nome: 'Produto B', preco: 20.99 },
    { id: 3, nome: 'Produto C', preco: 30.99 }
];

// Rota para obter todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});


