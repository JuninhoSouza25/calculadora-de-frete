// Ação do botão Pajuçara
const botaoCalculoPj = document.querySelector("#botao-pajucara")
botaoCalculoPj.addEventListener("click", function(){
    let pajucara = criaTransportadora([
        [8.82, 11.77, 15.88, 28.02, 46.63, 72.92, 98.10, 128.99, 0.842],
        [11.87, 15.85, 21.39, 33.32, 49.94, 74.95, 104.87, 141.65, 0.979], 
        [14.97, 19.99, 26.98, 36.80, 55.17, 82.79, 115.81, 156.46, 1.085]], 
        [17.46, 18.80, 18.80]
    );
    
    let destinoPj = document.querySelector('#destino-pj')
    let listaDestino = ['dest1', 'dest2', 'dest3']
    defineValores(listaDestino, destinoPj, pajucara)
    

    let pesoOpcionalPj = document.querySelector('#peso-opcional-pj')
    const listaPeso = ['preco0', 'preco1', 'preco2', 'preco3', 'preco4', 'preco5', 'preco6', 'preco7', 'preco8'];
    defineFretePesoPj(listaPeso, pesoPj, listaPreco, pesoOpcionalPj)

    let cliente = document.querySelector("#cliente")

    let valorNotaPj = document.querySelector('#valor-nota-pj')
    let totalPj = document.querySelector('#total-pj')

    let pesoPedagio 
    if (pesoPj.value === "preco0" || pesoPj.value === "preco1" || pesoPj.value === "preco2" || pesoPj.value === "preco3" || pesoPj.value === "preco4" || pesoPj.value === "preco5"){
        pesoPedagio = 1
    }else if (pesoPj.value === "preco6" || pesoPj.value === "preco7"){
        pesoPedagio = 199
    }else{
        pesoPedagio = parseInt(pesoOpcionalPj.value)
    }

    definePedagio(pesoPedagio)
    
    defineFreteValor(valorNotaPj)

    calculoTotal(fretePeso, freteValor, valorTaxa, pedagio, cliente)
    console.log('Frete Peso: ' + fretePeso)
    console.log('Frete Valor: ' + freteValor)
    console.log('Valor Taxa: ' + valorTaxa)
    console.log('Pedagio: ' + pedagio)
    console.log('Frete total: ' + freteTotal)
    console.log('cliente: ' + cliente.value)

    


    totalPj.textContent = "R$ " + freteTotal.toFixed(2)
})

//cria o campo de peso adicional caso acima de 200kg.
let pesoPj = document.querySelector('#peso-pj')
pesoPj.addEventListener("click", function(){ 

    let adicionar = document.querySelector(".adicionar-div")
    let input = document.createElement("input");
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
    for (let i = 0; i <= listaDestino.length; i++){
        if (listaDestino[i] === destino.value){
            listaPreco = transportadora.lista[i];
            valorTaxa = transportadora.taxa[i];
        }
    }
    return listaPreco, valorTaxa;
}

// Define o Frete Valor
function defineFreteValor(valorNota){
    freteValor = (valorNota.value * 0.003) + (valorNota.value * 0.004)
    if (freteValor < 6.14){
        freteValor = 6.14
    }

    return freteValor;
}

//Recebe o peso e define o valor referente ao peso
function defineFretePesoPj(listaPeso, peso, lista, pesoOpcional){ 
    
    for (let i = 0; i <= listaPeso.length; i++){
        if (listaPeso[i] === peso.value){
            fretePeso = lista[i]
            if (listaPeso[8] == peso.value){
                let pesoAcima = pesoOpcional.value - 200
                fretePeso = lista[7] + ( pesoAcima * lista[8])
            }
        }
    }
}

//Define o valor do pedagio em relação ao peso
function definePedagio(peso){

    let fracaoPeso = parseInt(( peso / 100) + 1)
    pedagio = fracaoPeso * 9.26

    return pedagio;
}

//Faz o calculo final 
function calculoTotal(fretePeso, freteValor, taxa, pedagio, cliente) { 
    let trt = document.querySelector("#trt")
    console.log('trt: ' + trt.value)
    var tas = 4.93
    total = fretePeso + freteValor + taxa + pedagio + tas
    

    if (trt.value == "sim"){
        freteTotal = total + (total * 0.15)
    }else{
        freteTotal = total
    }
    console.log('valor trt: R$ ' + (total * 0.15))
    if(cliente.value === 'cliente'){
        freteTotal = freteTotal * 1.1
    }
    return freteTotal
}