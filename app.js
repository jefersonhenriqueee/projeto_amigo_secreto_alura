//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

lista_nomes=[]
numeros=[]

function adicionarAmigo() {
    let amigo = document.querySelector('input').value.trim();

    if (amigo === "") {
        alert("O nome não pode ser vazio!");

    }else if (lista_nomes.includes(amigo)==false){
        lista_nomes.push(amigo)
        let lista= document.createElement("li");
        lista.textContent = amigo.charAt(0).toUpperCase() + amigo.slice(1);
        document.getElementById('listaAmigos').appendChild(lista);
    }
    else{
        alert("Nome já está na lista !")
    }
    document.querySelector('input').value='';

}

function sortearAmigo(){
    if (lista_nomes.length==0){
        alert("Insira um nome");
    }else{
        let numero_elemento;

        do {
            numero_elemento = parseInt(Math.random() * lista_nomes.length);
        } while (numeros.includes(numero_elemento));
        
        numeros.push(numero_elemento);
        let sorteado = lista_nomes[numero_elemento];
        document.getElementById('resultado').innerHTML = '';
        let li = document.createElement("li");
        li.textContent = `O amigo secreto sorteado é: ${sorteado.charAt(0).toUpperCase() + sorteado.slice(1)}`; 
        document.getElementById('resultado').appendChild(li);
    }
    }


function ReiniciarSorteio(){
    numeros=[]
    lista_nomes=[];
    lista=[];
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    document.querySelector('input').value = '';
    document.getElementById('resultado').innerHTML = '';


}