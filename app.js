function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let fim = parseInt(document.getElementById('ate').value);

    let sorteados  =[]
    let numero = obterNumeroAletorio(inicio,fim)

    for(let i=0; i < quantidade; i++){

    }
    
}

function obterNumeroAletorio(min, max){
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}