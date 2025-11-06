// Tipos básicos (number, string, boolean, any)
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

//arrays
let lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

//tipos personalizados (type alias)
type transacao  = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

//Enum
enum TipoTransacao {
    Deposito = "Depósito",
    Transferencia = "Transferência",
    PagamentoBoleto = "Pagamento de Boleto"
}

const novaTransacao: transacao = {
    tipoTransacao: TipoTransacao.PagamentoBoleto,
    data: new Date(),
    valor: 0
};

console.log(novaTransacao);