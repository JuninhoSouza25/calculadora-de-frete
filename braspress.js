var braspress = {
    lista: [[21.12, 21.91, 22.41, 22.41, 31.75, 44.16, 0.89],
    [21.12, 21.91, 22.41, 22.41, 31.75, 44.16, 0.89],
    [22.41, 24.36, 28.49, 28.49, 41.28, 57.40, 1.18],
    [24.36, 26.30, 32.04, 32.04, 45.41, 63.15, 1.29]],
    tx: [17.46, 18.80, 18.80, 28.80]
}

var listaDestinoBp = ['dest1-bp', 'dest2-bp', 'dest3-bp', 'dest4-bp']
var destinoBp = document.querySelector('#destino-bp')
function defineValoresBp(){  //Define qual lista de preço e valor da taxa será usada de acordo com a região

    var i = 0
    for (i = 0; i <= listaDestinoBp.length; i++){
        if (listaDestinoBp[i] === destinoBp.value){
            listaPrecoBraspress = braspress.lista[i]
            taxaBraspress = braspress.tx[i]
        }
    }
}

var pesoBp = document.querySelector('#peso-bp')
function defineValorPeso(){
    var listaPesoBp = ['preco0', 'preco1', 'preco2', 'preco3', 'preco4', 'preco5'];
    var i =0
    for (i = 0; i <= 7; i++){
        if (listaPesoBp[i] == pesoBp.value){
            valorListaPreco = listaPrecoBraspress[i]
        }
    }
}


var valorNotaBp = document.querySelector('#valor-nota-bp')
function calculoTotalBp() {
    valorSeguro = valorNotaBp.value * 0.0075
    totalBraspress = taxaBraspress + valorListaPreco + valorSeguro
}

var totalBp = document.querySelector('#total-bp')
function calculoTotalBraspress(){
    defineValoresBp()
    defineValorPeso()
    calculoTotalBp()
    console.log('valor lista braspress ' + valorListaPreco)
    console.log(listaPrecoBraspress)
    totalBp.textContent = "R$ " + totalBraspress.toFixed(2)
}