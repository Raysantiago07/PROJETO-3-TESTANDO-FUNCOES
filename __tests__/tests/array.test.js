const {filtrarPares} = require('../src/array')

describe('Filtrar pares', () => {
    test('Retorne o apenas números pares em uma array', () => {
        expect(filtrarPares([1,2,5,8,10])).toEqual([2,8,10])
    })
})