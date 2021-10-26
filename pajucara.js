var pajucara = {  //Lista de valores referente à região
    lista: [[8.82, 11.77, 15.88, 28.02, 46.63, 72.92, 98.10, 128.99, 0.842],[11.87, 15.85, 21.39, 33.32, 49.94, 74.95, 104.87, 141.65, 0.97], 
    [14.97, 19.99, 26.98, 36.80, 55.17, 82.79, 115.81, 156.46, 1.085]],
    tx: [17.46, 18.80, 18.80]
}

//Define qual lista de preço e valor da taxa será usada de acordo com a região
var destinoPj = document.querySelector('#destino-pj')
var listaDestino = ['dest1-pj', 'dest2-pj', 'dest3-pj']
function defineValores(){  

    for (var i = 0; i <= listaDestino.length; i++){
        if (listaDestino[i] === destinoPj.value){
            listaPrecoPajucara = pajucara.lista[i]
            taxaPajucara = pajucara.tx[i]
        }
    }
}

//Recebe o peso e define o valor referente ao peso
var pesoPj = document.querySelector('#peso-pj')
function defineValorPesoPj(){ 

    var pesoOpcionalPj = document.querySelector('#peso-opcional-pj')
    var listaPesoPj = ['preco0', 'preco1', 'preco2', 'preco3', 'preco4', 'preco5', 'preco6', 'preco7', 'preco8'];
    for (var i = 0; i <= listaPesoPj.length; i++){
        if (listaPesoPj[i] == pesoPj.value){
            valorListaPreco = listaPrecoPajucara[i]
            if (listaPesoPj[8] == pesoPj.value){
                valorListaPreco = listaPrecoPajucara[8] * pesoOpcionalPj.value
            }
        }
    }
    return pesoOpcionalPj
}

//cria o campo de peso adicional caso acima de 200kg.
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

var valorNotaPj = document.querySelector('#valor-nota-pj')
var totalPj = document.querySelector('#total-pj')
//Faz o calculo final 
function calculoTotalPj() { 

    valorSeguro = valorNotaPj.value * 0.0055
    totalPajucara = taxaPajucara + valorListaPreco + valorSeguro
}

//Executa a ação no clique do botão
function calculoTotalPajucara(){ 
    
    defineValores()
    defineValorPesoPj()
    calculoTotalPj()
    
    totalPj.textContent = "R$ " + totalPajucara.toFixed(2)
}