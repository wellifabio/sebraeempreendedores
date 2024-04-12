function calcular() {
    let aluguel = document.getElementById('aluguel').value;
    let agua = document.getElementById('agua').value;
    let luz = document.getElementById('luz').value;
    let folhaPagamento = document.getElementById('folhaPagamento').value;
    let outras = document.getElementById('outras').value;

    let total = parseFloat(aluguel) + parseFloat(agua) + parseFloat(luz) + parseFloat(folhaPagamento) + parseFloat(outras);
    let media = total / 5;
    let estimativa = total * 12;

    document.getElementById('total').innerHTML = "Total R$ " + total.toFixed(2);
    document.getElementById('media').innerHTML = "Média R$ " + media.toFixed(2);
    document.getElementById('estimativa').innerHTML = "Estimativa anual R$ " + estimativa.toFixed(2);
}