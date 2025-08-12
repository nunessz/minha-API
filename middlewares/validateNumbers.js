// middlewares/validateNumbers.js — Porteiro auxiliar que verifica o pedido antes de entrar na cozinha

module.exports = (req, res, next) => {
    const numeros = req.body.numeros; // pega o pedido do cliente

// Confere se 'numeros' existe, é um array e não está vazio
    if (!Array.isArray(numeros) || numeros.length === 0) {
    return res.status(400).json({ erro: 'Envie um array válido no campo "numeros".' });
}

// Confere se todos os itens são números
    if (!numeros.every(n => typeof n === 'number')) {
        return res.status(400).json({ erro: 'Todos os elementos do array devem ser números.' });
}

    next(); // pedido válido: libera para o cozinheiro
};
