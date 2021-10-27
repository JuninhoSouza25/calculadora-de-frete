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
    defineFretePeso(listaPeso, pesoPj, listaPreco, pesoOpcionalPj)

    

    var valorNotaPj = document.querySelector('#valor-nota-pj')
    var totalPj = document.querySelector('#total-pj')
    defineFreteValor(valorNotaPj)
    //console.log(freteValor)
    calculoTotal(valorNotaPj, valorTaxa)
    //console.log(total)
    //console.log(fretePeso)

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

// Define o Frete Valor
function defineFreteValor(valorNota, ){
    var freteValor = (valorNota.value * 0.003) + (valorNota.value * 0.004)
    if (freteValor < 6.14){
        freteValor = 6.14
    }
}

//Recebe o peso e define o valor referente ao peso
function defineFretePeso(listaPeso, peso, lista, pesoOpcional){ 
    
    for (var i = 0; i <= listaPeso.length; i++){
        if (listaPeso[i] === peso.value){
            fretePeso = lista[i]
            if (listaPeso[8] == peso.value){
                var pesoAcima = pesoOpcional.value - 200
                fretePeso = lista[7] + ( pesoAcima * lista[8])
            }
        }
    }
}

//Faz o calculo final 
function calculoTotal(valorNota, taxa) { 

    valorSeguro = valorNota.value * 0.0055
    total = taxa + fretePeso + valorSeguro

    return total
}