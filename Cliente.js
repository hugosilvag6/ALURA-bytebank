export class Cliente {
    constructor(nome, cpf, senha) {
        this.n_ome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
    get cpf() {
        return this._cpf;
    }
}
