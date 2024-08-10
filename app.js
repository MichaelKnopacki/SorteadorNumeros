function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let fim = parseInt(document.getElementById('ate').value);
    

    if(inicio >= fim){
        alert(`O numero inicial ${inicio} é maior que o número final ${fim}`);
        return;
    }

    let diferenca = (fim-inicio+1);
    if ( diferenca < quantidade){
        alert(`A diferença entre o ínicio e fim: ${diferenca} é menor que a quantidade ${quantidade}`);
        return;
    }

    let sorteados  =[];
    let numero;
  

    for(let i=0; i < quantidade; i++){
        numero = obterNumeroAletorio(inicio,fim);
        while (sorteados.includes(numero)){
            numero = obterNumeroAletorio(inicio,fim);
        }
        sorteados.push(numero);    
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
    
    function alterarStatusBotao(){
        let botao = document.getElementById('btn-reiniciar')
            if (botao.classList.contains('container__botao-desabilitado')){
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
            }else{
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');                
            }
        
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}

function obterNumeroAletorio(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}