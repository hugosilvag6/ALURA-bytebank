import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContasCorrentes = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContasCorrentes++;
    }
    sacar(valor) {
        const taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
