import { Funcionario } from "./Funcionarios.js";

export class Diretor extends Funcionario{
    constructor(nome, salario , cpf){
        super(nome, salario, cpf);
        this._bonificação = 2;
    }
}