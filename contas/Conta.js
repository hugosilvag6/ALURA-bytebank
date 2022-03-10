import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta){
            throw new Error('Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata.');
        }
        this.cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }
    set cliente(dados) {
        if (dados instanceof Cliente) {
            this._cliente = dados;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        throw new Error('Método abstrato. Para usá-lo, sobrescreva.');
    }
    _sacar(valor, taxa) {
        let valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
        }
        return this._saldo;
    }
    depositar(valor) {
        if (this._saldo >= 0) {
            this._saldo += valor;
        }
    }
    transferir(valor, contaDestino) {
        if (this._saldo >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    }
}
