export class SistemaAutenticacao {
    static login(pessoa, senha){
        if(SistemaAutenticacao.ehAutenticavel(pessoa)){
            return pessoa.autenticar(senha);
        }
        return "não autenticável";
    }
    static ehAutenticavel(pessoa){
        return "autenticar" in pessoa && pessoa.autenticar instanceof Function
    }
}