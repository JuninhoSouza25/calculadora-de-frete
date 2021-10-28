var botaoCubagem = document.querySelector(".cubagem-btn")
botaoCubagem.addEventListener("click", function(event){
    event.preventDefault();

    var quantidadeRecebida = document.querySelector("#quantidade")
    var alturaRecebida = document.querySelector("#altura")
    var larguraRecebida = document.querySelector("#largura")
    var comprimentoRecebida = document.querySelector("#comprimento")
    var pesoCubado = document.querySelector("#peso-cubado")

    let volume1 = criaVolume(quantidadeRecebida.value, alturaRecebida.value, larguraRecebida.value, comprimentoRecebida.value);

    calculaVolume(volume1.quantidade, volume1.altura,volume1.largura, volume1.comprimento)
    pesoCubado.textContent = totalPesoCubado.toFixed(2) + ' kg'

})

function calculaVolume(quantidade, altura, largura, comprimento) {
    var fator = 300
    volumeCubagem = quantidade * (altura * largura * comprimento)
    totalPesoCubado = volumeCubagem * fator

    return totalPesoCubado
}

function criaVolume(quantidade, altura, largura, comprimento){

    let volume = {};
    volume.quantidade = quantidade
    volume.altura = altura
    volume.largura = largura
    volume.comprimento = comprimento

    return volume;
}


