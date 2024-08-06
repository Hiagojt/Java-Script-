export class SistemaAutenticação{
    static login(autenticavel, senha){
        if(SistemaAutenticação.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof Function
    }
}