const { subtrai, ehPar, contarCaracteres} = require('../src/calculadora')

describe('Funções da calculadora', () => {
    test('Subtrai deve retorna a diferença ou a subtração de dois números', () => {
        expect(subtrai(9,5)).toBe(4)
    })

    test('Deve verificar se um número é par', () => {
        expect(ehPar(2)).toBe(true)
    })

    test('Contar a quantidade de caracteres em uma string', () => {
        expect(contarCaracteres('Iai Everson')).toBe(11)
    })
})

