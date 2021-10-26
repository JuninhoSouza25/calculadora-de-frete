var botaoCalculoPj = document.querySelector("#botao-pajucara")
botaoCalculoPj.addEventListener("click", function(){
    let pajucara = criaTransportadora([[8.82, 11.77, 15.88, 28.02, 46.63, 72.92, 98.10, 128.99, 0.842],
        [11.87, 15.85, 21.39, 33.32, 49.94, 74.95, 104.87, 141.65, 0.97], 
        [14.97, 19.99, 26.98, 36.80, 55.17, 82.79, 115.81, 156.46, 1.085]], [17.46, 18.80, 18.80]);
    
    var destinoPj = document.querySelector('#destino-pj')
    defineValores(destinoPj, pajucara)
    

    var pesoOpcionalPj = document.querySelector('#peso-opcional-pj')
    var pesoPj = document.querySelector('#peso-pj')
    defineValorPeso(pesoPj, listaPreco, pesoOpcionalPj)
    console.log(valorListaPreco)

    var valorNotaPj = document.querySelector('#valor-nota-pj')
    var totalPj = document.querySelector('#total-pj')
    calculoTotalPj(valorNotaPj, valorTaxa)
    console.log(total)

    totalPj.textContent = "R$ " + total.toFixed(2)
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

function criaTransportadora(lista, taxa){
    let transportadora = {}
    transportadora.lista = lista
    transportadora.taxa = taxa

    return transportadora;
}

//Define qual lista de preço e valor da taxa será usada de acordo com a região
function defineValores(destino, transportadora){  
    var listaDestino = ['dest1', 'dest2', 'dest3']
    for (var i = 0; i <= listaDestino.length; i++){
        if (listaDestino[i] === destino.value){
            listaPreco = transportadora.lista[i];
            valorTaxa = transportadora.taxa[i];
        }
    }
    return listaPreco, valorTaxa;
}

//Recebe o peso e define o valor referente ao peso
function defineValorPeso(peso, lista, pesoOpcional){ 

    var listaPeso = ['preco0', 'preco1', 'preco2', 'preco3', 'preco4', 'preco5', 'preco6', 'preco7', 'preco8'];
    for (var i = 0; i <= listaPeso.length; i++){
        if (listaPeso[i] == peso.value){
            valorListaPreco = lista[i]
            if (listaPeso[8] == peso.value){
                valorListaPreco = lista[8] * pesoOpcional.value
            }
        }
    }
}

//Faz o calculo final 
function calculoTotalPj(valorNota, taxa) { 

    valorSeguro = valorNota.value * 0.0055
    total = taxa + valorListaPreco + valorSeguro

    return total
}