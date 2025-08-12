// routes/mathRoutes.js — Porteiro que recebe o pedido na porta /calcular
const express = require('express');
const router = express.Router();

// porteiro auxiliar para validar pedido
const validateNumbers = require('../middlewares/validateNumbers');

// cozinha que vai fazer os cálculos
const mathController = require('../controllers/mathController')

// Quando chegar POST na rota base /calcular:
// primeiro o porteiro auxiliar valida os dados,
// depois o cozinheiro calcula e devolve a resposta.
router.post('/', validateNumbers, mathController.calculateStats);
module.exports = router; // exporta o porteiro para o chefe (app.js)