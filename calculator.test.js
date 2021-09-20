//Importando o arquivo calculator.js
//import { expect, test } from '@jest/globals';
const calculator = require('./calculator.js');

//Executando os testes
test("testando soma de 1+1", ()=> {
    expect(calculator.soma(1,1)).toBe(2);
});

test("testar divisão de 42/6", () => {
    expect(calculator.divisao(42,6)).toBe(7);
});

test("testar soma de 5+5", () => {
    expect(calculator.soma(5,5)).toBe(11); /* Forçando um erro no teste */
});