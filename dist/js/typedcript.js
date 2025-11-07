// Tipos básicos (number, string, boolean, any)
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
//arrays
let lista = [];
lista.push(13, 22.5, 22, 89, 1.58);
//Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["Deposito"] = "Dep\u00F3sito";
    TipoTransacao["Transferencia"] = "Transfer\u00EAncia";
    TipoTransacao["PagamentoBoleto"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PagamentoBoleto,
    data: new Date(),
    valor: 0
};
console.log(novaTransacao);
