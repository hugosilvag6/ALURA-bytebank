import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numeroDeContasPoupancas = 0;
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
        ContaPoupanca.numeroDeContasPoupancas++;
    }
    sacar(valor) {
        const taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}
