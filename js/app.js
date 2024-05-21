let amigosSorteados = [];
let NomeDoAmigo = document.getElementById('nome-amigo');
let listaDeAmigos = document.getElementById('lista-amigos');

function adicionar(){
    if(amigosSorteados.includes(NomeDoAmigo.value)) {
        alert('Este nome já está na lista');
        document.getElementById('nome-amigo').value = '';
        return;
    } else if(NomeDoAmigo.value == '') {
        alert('Insira um nome válido');
        return;
    } else{
    amigosSorteados.push(NomeDoAmigo.value);
    }
    if (listaDeAmigos.textContent == '') {
        listaDeAmigos.textContent = NomeDoAmigo.value;
    } else {
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + NomeDoAmigo.value;
    }
    document.getElementById('nome-amigo').value = '';


}

function sortear() {
    sortearNomes(amigosSorteados);
    let sorteio = document.getElementById('lista-sorteio');
    if (amigosSorteados.length <= 2) {
        alert('Insira mais de dois (2) nomes para realizar o sorteio');
        return;
    }
    
    for (let i = 0; i < amigosSorteados.length; i++) {
        if (i == amigosSorteados.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigosSorteados[i] + '-->' + amigosSorteados[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigosSorteados[i] + '-->' + amigosSorteados[i + 1] + '<br>';
        }   
    }
}

function remover(){
    if(amigosSorteados.includes(NomeDoAmigo.value)){
        amigosSorteados.splice(amigosSorteados.indexOf(NomeDoAmigo.value));
        listaDeAmigos.textContent = amigosSorteados;
        
    } else {
        alert('Digite um nome da lista para remove-lo do sorteio');
        return;
    }
}

function sortearNomes(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}