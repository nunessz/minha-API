const math = require('mathjs'); // cozinha equipada com mathjs para calcular média, mínimo, máximo
exports.calculateStats = (req, res) => {
    const numeros = req.body.numeros; // pega o pedido do cliente (array de números)
    try {
        const media = math.mean(numeros); // calcula a média
        const maximo = math.max(numeros); // calcula o maior valor
        const minimo = math.min(numeros); // calcula o menor valor

// devolve a resposta para o garçom levar para o cliente
    return res.json({ media, maximo, minimo });
} catch (error) {
    console.error(error);
    // erro interno da cozinha (servidor)
    return res.status(500).json({ erro: 'Erro ao calcular os valores.' });
  }
};