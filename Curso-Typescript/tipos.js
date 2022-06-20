"use strict";
// boollean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = 'Bruno Jacob';
//Array
var idades = [23, 28, 45];
var idades2 = [34, 23, 56];
//Tuple
var jogadores;
jogadores = ['Bruno', 23, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pedente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any
var retornoDaAPI = [123, 'Bruno', false];
var retornoDaAPI2 = {
//...
};
//Void
function printarNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(object) {
    //...
}
criar({
    propriedade: 1,
});
// criar('vitor'); Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 ".concat(nota));
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Bruno',
        sobrenome: 'Jacob',
        dataNascimento: new Date(),
    }, {
        nome: 'Rivaldo',
        sobrenome: 'Neto',
        dataNascimento: new Date(),
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Bruno',
    telefone1: '12324324',
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
//<number>minhaIdade.toString();
//const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
