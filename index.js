import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./contas/ContaCorrente.js";
import { ContaPoupanca } from "./contas/ContaPoupanca.js";
import { ContaSalario } from "./contas/ContaSalario.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { Gerente } from "./funcionarios/Gerente.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12345678911);
gerente.cadastrarSenha("123")
const cliente = new Cliente("Lais", 12345612347, "456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

console.log(diretorEstaLogado);
console.log(clienteEstaLogado)
