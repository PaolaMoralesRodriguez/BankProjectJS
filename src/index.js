class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente(); 

cliente1.nome = "Paola Morales"
cliente1.cpf = 25869314878
cliente1.agencia = 1001
cliente1.saldo = 0

cliente2.nome = "Robson Gomes"
cliente2.cpf = 14778965412
cliente2.agencia = 1001
cliente2.saldo = 222

console.log(cliente1, cliente2)

