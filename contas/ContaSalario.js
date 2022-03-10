import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    static numeroDeContasSalarios = 0;
    constructor(cliente) {
        super(0, cliente, 100);
        ContaSalario.numeroDeContasSalarios++;
    }
    sacar(valor) {
        const taxa = 1.01;
        return super._sacar(valor, taxa);
    }
}
