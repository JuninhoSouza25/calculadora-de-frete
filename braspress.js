// Ação do botão Braspress
var botaoCalculoBp = document.querySelector("#botao-braspress")
botaoCalculoBp.addEventListener("click", function(){
    let braspress = criaTransportadora([[21.12, 21.91, 22.41, 22.41, 31.75, 44.16, 0.89],
        [21.12, 21.91, 22.41, 22.41, 31.75, 44.16, 0.89],
        [22.41, 24.36, 28.49, 28.49, 41.28, 57.40, 1.18],
        [24.36, 26.30, 32.04, 32.04, 45.41, 63.15, 1.29]], [17.46, 18.80, 18.80, 28.80])
    console.log(braspress)

    var listaDestino = ['dest1', 'dest2', 'dest3', 'dest4']
    var destinoBp = document.querySelector("#destino-bp")
    defineValores(listaDestino, destinoBp, braspress)
    
    var pesoBp = document.querySelector("#peso-bp")
    var listaPeso = ['preco0', 'preco1', 'preco2', 'preco3', 'preco4', 'preco5'];
    defineValorPeso(listaPeso, pesoBp, listaPreco, pesoBp)

    var valorNotaBp = document.querySelector('#valor-nota-bp')
    var totalBp = document.querySelector('#total-bp')
    calculoTotal(valorNotaBp, valorTaxa)
    console.log(total)

    totalBp.textContent = "R$ " + total.toFixed(2)
})