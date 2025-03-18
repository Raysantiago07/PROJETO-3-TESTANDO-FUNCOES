// Filtrar apenas os pares

function filtrarPares(numeros) {
    return numeros.filter(n => n % 2 === 0)
}

module.exports = {filtrarPares}