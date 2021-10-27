// Ação do botão Pajuçara
var botaoCalculoPj = document.querySelector("#botao-pajucara")
botaoCalculoPj.addEventListener("click", function(){
    let pajucara = criaTransportadora([[8.82, 11.77, 15.88, 28.02, 46.63, 72.92, 98.10, 128.99, 0.842],
        [11.87, 15.85, 21.39, 33.32, 49.94, 74.95, 104.87, 141.65, 0.97], 
        [14.97, 19.99, 26.98, 36.80, 55.17, 82.79, 115.81, 156.46, 1.085]], [17.46, 18.80, 18.80]);
    
    var destinoPj = document.querySelector('#destino-pj')
    var listaDestino = ['dest1', 'dest2', 'dest3']
    defineValores(listaDestino, destinoPj, pajucara)
    

    var pesoOpcionalPj = document.querySelector('#peso-opcional-pj')
    var listaPeso = ['preco0', 'preco1', 'preco2', 'preco3', 'preco4', 'preco5', 'preco6', 'preco7', 'preco8'];
    defineValorPeso(listaPeso, pesoPj, listaPreco, pesoOpcionalPj)

    var valorNotaPj = document.querySelector('#valor-nota-pj')
    var totalPj = document.querySelector('#total-pj')
    calculoTotal(valorNotaPj, valorTaxa)
    console.log(total)

    totalPj.textContent = "R$ " + total.toFixed(2)
})


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


//cria o campo de peso adicional caso acima de 200kg.
var pesoPj = document.querySelector('#peso-pj')
pesoPj.addEventListener("click", function(){ 

    var adicionar = document.querySelector(".adicionar-div")
    var input = document.createElement("input");
    input.type = "text"
    input.name = "peso-opcional"
    input.id = "peso-opcional-pj"
    input.placeholder = "Digite o peso"
    if (pesoPj.value == 'preco8'){
        adicionar.appendChild(input)
    }
})


// Factory que cria transportadora
function criaTransportadora(lista, taxa){
    let transportadora = {}
    transportadora.lista = lista
    transportadora.taxa = taxa

    return transportadora;
}

//Define qual lista de preço e valor da taxa será usada de acordo com a região
function defineValores(listaDestino,destino, transportadora){  
    for (var i = 0; i <= listaDestino.length; i++){
        if (listaDestino[i] === destino.value){
            listaPreco = transportadora.lista[i];
            valorTaxa = transportadora.taxa[i];
        }
    }
    return listaPreco, valorTaxa;
}

//Recebe o peso e define o valor referente ao peso
function defineValorPeso(listaPeso, peso, lista, pesoOpcional){ 

    for (var i = 0; i <= listaPeso.length; i++){
        if (listaPeso[i] === peso.value){
            valorListaPreco = lista[i]
            if (listaPeso[8] == peso.value){
                valorListaPreco = lista[8] * pesoOpcional.value
            }
        }
    }
    return valorListaPreco;
}

//Faz o calculo final 
function calculoTotal(valorNota, taxa) { 

    valorSeguro = valorNota.value * 0.0055
    total = taxa + valorListaPreco + valorSeguro

    return total;
}