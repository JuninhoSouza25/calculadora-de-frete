const botaoCalculoCorreios = document.querySelector("#botao-correios");
botaoCalculoCorreios.addEventListener("click", function(){
    console.log("Fui clicado modafoca!")

    const correios = criaTransportadora([
        [10.00, 11.21, 12.00, 15.08, 16.81, 18.17, 19.62, 20.86, 22.17, 23.44, 24.20, 24.73, 3.07],
        [19.14, 19.84, 21.60, 23.84, 26.05, 28.67, 30.91, 33.38, 35.75, 38.23, 40.74, 43.48, 5.39]
    ], [null]);

    let destinoCorreios = document.querySelector('#destino-correios')
    const listaDestinoCorreios = ['dest1', 'dest2']
    defineValores(listaDestinoCorreios, destinoCorreios, correios)
    
    let clienteCorreios = document.querySelector("#cliente-correios")
    let ar = document.querySelector("#ar")
    let pesoOpcionaCorreios = document.querySelector('#peso-opcional-correios')
    const listaPesoCorreios = ['preco0', 'preco1', 'preco2', 'preco3', 'preco4', 'preco5', 'preco6', 'preco7', 'preco8', 'preco0', 'preco10', 'preco11', 'preco12'];
    calculoFreteCorreios(listaPesoCorreios, pesoCorreios, listaPreco, pesoOpcionaCorreios, clienteCorreios, ar)
    console.log(fretePeso)

    let totalCorreios = document.querySelector("#total-correios")
    totalCorreios.textContent = "R$ " + fretePeso.toFixed(2)
})

//Define a lista de valores de acordo com o peso selecionado.
let pesoCorreios = document.querySelector('#peso-correios')
pesoCorreios.addEventListener("click", function(){ 

    const adicionar = document.querySelector(".adicionar-div-correios")
    let input = document.createElement("input");
    input.type = "text"
    input.name = "peso-opcional"
    input.id = "peso-opcional-correios"
    input.placeholder = "Digite o peso"
    if (pesoCorreios.value == 'preco12'){
        adicionar.appendChild(input)
        
    }
})

//Calcula o valor do frete
function calculoFreteCorreios(listaPeso, peso, lista, pesoOpcional, cliente, ar){ 
    arValor = 6.35;
    for (let i = 0; i <= listaPeso.length; i++){
        if (listaPeso[i] === peso.value){
            fretePeso = lista[i]
            if (listaPeso[12] == peso.value){
                let pesoAcima = pesoOpcional.value - 10
                fretePeso = lista[11] + ( pesoAcima * lista[12])
            }
        }
    }

    if(ar.value === "sim") {
        fretePeso = fretePeso + arValor
    }
}