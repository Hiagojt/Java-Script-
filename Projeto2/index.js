
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticação } from "./SistemaAutenticação.js";


    const diretor = new Diretor("Rodrigo", 10000, 12345678900);
    diretor.cadastrarSenha("123456");
    const gerente = new Gerente("Ricardo", 5000, 12345678901);
    gerente.cadastrarSenha("123");

    const cliente = new Cliente("lais", 123456789, "234")
    const diretorEstaLogado = SistemaAutenticação.login(diretor, "123456");
    const gerenteEstaLogado = SistemaAutenticação.login(gerente, "123");
    const clienteEstaLogado = SistemaAutenticação.login(cliente, "234");
    console.log(diretorEstaLogado,gerenteEstaLogado, clienteEstaLogado );
 





