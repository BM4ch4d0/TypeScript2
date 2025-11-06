let saldo = 3000;
alert("Teste");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString();
}
